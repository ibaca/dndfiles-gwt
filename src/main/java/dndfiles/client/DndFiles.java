package dndfiles.client;

import com.google.gwt.core.client.EntryPoint;
import elemental2.dom.*;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.InputType;

import java.util.function.Consumer;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.gwt.elemento.core.EventType.*;

// http://www.html5rocks.com/en/tutorials/file/dndfiles/
public class DndFiles implements EntryPoint { //@formatter:off

    @Override public void onModuleLoad() {
        // create UI
        HTMLInputElement file = Elements.input(InputType.file).id("files")
                .apply(el -> { el.name = "files[]"; el.multiple = true; }).asElement();
        document.body.appendChild(file);

        HTMLOutputElement out = Elements.output().asElement();
        document.body.appendChild(out);

        // bind UI
        Consumer<FileList> show = files -> {
            for (int i = 0; i < files.length; i++) {
                File f = files.item(i);

                out.innerHTML += "<li><strong>" + f.name + "</strong> (" + f.type + ") - "
                        + f.size + " bytes, last modified: " + f.lastModifiedDate;

                FileReader reader = new FileReader();
                reader.onprogress = e -> { out.innerHTML += "<li>"+ e.loaded / e.total; return null; };
                reader.readAsBinaryString(f);
            }
        } ;
        bind(file, change, e -> { show.accept(((HTMLInputElement) e.target).files); });
        bind(document.body, dragover, e -> { consume(e); e.dataTransfer.dropEffect = "copy"; });
        bind(document.body, drop, e -> { consume(e); show.accept(e.dataTransfer.files); });
    }


    private static void consume(Event e) { e.stopPropagation(); e.preventDefault(); }
}
