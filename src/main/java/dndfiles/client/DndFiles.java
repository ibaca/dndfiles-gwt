package dndfiles.client;

import static com.google.gwt.safehtml.shared.SafeHtmlUtils.htmlEscape;
import static elemental.events.Event.CHANGE;
import static elemental.events.Event.COPY;
import static elemental.events.Event.DRAGOVER;
import static elemental.events.Event.DROP;

import com.google.gwt.core.client.EntryPoint;
import elemental.client.Browser;
import elemental.dom.Clipboard;
import elemental.dom.Document;
import elemental.events.EventListener;
import elemental.html.File;
import elemental.html.FileList;
import elemental.html.FileReader;
import elemental.html.InputElement;
import elemental.html.OutputElement;
import elemental.html.Window;

// http://www.html5rocks.com/en/tutorials/file/dndfiles/
public class DndFiles implements EntryPoint {
    private Window wnd;
    private OutputElement list;

    @Override public void onModuleLoad() {
        wnd = Browser.getWindow();
        Document doc = Browser.getDocument();

        if (def(wnd, "File") && def(wnd, "FileReader") && def(wnd, "FileList") && def(wnd, "Blob")) {
            // Great success! All the File APIs are supported.
        } else {
            wnd.alert("The File APIs are not fully supported in this browser.");
        }

        InputElement file = doc.createInputElement();
        file.setType("file"); file.setId("files"); file.setName("files[]"); file.setMultiple(true);

        list = doc.createOutputElement();
        list.setId("list");

        doc.getBody().appendChild(file);
        doc.getBody().appendChild(list);

        file.addEventListener(CHANGE, evt -> show(((InputElement) evt.getTarget()).getFiles()), false);

        doc.getBody().addEventListener(DRAGOVER, evt -> {
            evt.stopPropagation();
            evt.preventDefault();
            js(evt, "dataTransfer", Clipboard.class).setDropEffect(COPY);
        }, false);
        doc.getBody().addEventListener(DROP, evt -> {
            evt.stopPropagation();
            evt.preventDefault();
            show(js(evt, "dataTransfer", Clipboard.class).getFiles());
        }, false);
    }

    private void show(FileList files) {
        String out = "";
        for (int i = 0; i < files.length(); i++) {
            File f = files.item(i);

            final String name = htmlEscape(f.getName());
            final String type = htmlEscape(f.getType());
            out += "<li><strong>" + name + "</strong> (" + type + ") - " + f.getSize() + " bytes, "
                    + "last modified: " + f.getLastModifiedDate() + "</li>";

            FileReader reader = wnd.newFileReader();
            final EventListener eventListener = loaded -> {
                wnd.getConsole().log(loaded);
                wnd.getConsole().log(reader.getResult());
            };
            reader.setOnload(eventListener);
            reader.readAsBinaryString(f);
        }
        list.setInnerHTML("<ul>" + out + "</ul>");
    }

    static <T> T js(Object jso, String property, Class<T> as) { return js(jso, property); }

    static boolean def(Object jso, String property) { return js(jso, property) != null; }

    static native <T> T js(Object jso, String property) /*-{
        return property.split(".").reduce(function (acc, x) {
            return acc && acc[x];
        }, jso);
    }-*/;
}
