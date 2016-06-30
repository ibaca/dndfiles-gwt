package dndfiles.client;

import com.google.gwt.core.client.EntryPoint;
import elemental2.*;

import static elemental2.Global.document;

// http://www.html5rocks.com/en/tutorials/file/dndfiles/
public class DndFiles implements EntryPoint {
    private HTMLOutputElement list;

    @Override
    public void onModuleLoad() {
        HTMLInputElement file = (HTMLInputElement) Global.document.createElement("input");
        file.type = "file";
        file.id = "files";
        file.name = "files[]";
        file.multiple = true;

        list = (HTMLOutputElement) document.createElement("output");
        list.id = "list";

        document.body.appendChild(file);
        document.body.appendChild(list);

        file.addEventListener("change", evt -> {
            show(((HTMLInputElement) evt.target).files);
        }, false);

        document.body.addEventListener("dragover", evt -> {
            evt.stopPropagation();
            evt.preventDefault();
            ((DragEvent) evt).dataTransfer.dropEffect = "copy";
        }, false);
        document.body.addEventListener("drop", evt -> {
            evt.stopPropagation();
            evt.preventDefault();
            show(((DragEvent) evt).dataTransfer.files);
        }, false);
    }

    private void show(FileList files) {
        for (int i = 0; i < files.length; i++) {
            File f = files.item(i);

            final String name = document.createTextNode(f.name).wholeText;
            final String type = document.createTextNode(f.type).wholeText;
            list.innerHTML += "<li><strong>" + name + "</strong> (" + type + ") - " + f.size + " bytes, "
                    + "last modified: " + f.lastModifiedDate;

            FileReader reader = new FileReader();
            reader.onprogress = loaded -> {
                list.innerHTML += "<li>loading... " + loaded.loaded + "/" + loaded.total;
                return null;
            };
            reader.readAsBinaryString(f);
        }
    }
}
