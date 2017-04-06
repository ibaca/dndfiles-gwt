package dndfiles.client;

import com.google.gwt.core.client.EntryPoint;
import elemental2.dom.*;

import static elemental2.dom.DomGlobal.document;

// http://www.html5rocks.com/en/tutorials/file/dndfiles/
public class DndFiles implements EntryPoint {
    private HTMLOutputElement out;

    @Override
    public void onModuleLoad() {
        HTMLInputElement file = (HTMLInputElement) document.createElement("input");
        file.type = "file"; file.id = "files"; file.name = "files[]"; file.multiple = true;

        out = (HTMLOutputElement) document.createElement("output");

        document.body.appendChild(file);
        document.body.appendChild(out);

        file.addEventListener("change",
                e -> { show(((HTMLInputElement) e.target).files); }, false);
        document.body.addEventListener("dragover",
                e -> { consume(e); ((DragEvent) e).dataTransfer.dropEffect = "copy"; }, false);
        document.body.addEventListener("drop",
                e -> { consume(e); show(((DragEvent) e).dataTransfer.files); }, false);
    }

    private void show(FileList files) {
        for (int i = 0; i < files.length; i++) {
            File f = files.item(i);

            out.innerHTML += "<li><strong>" + f.name + "</strong> (" + f.type + ") - "
                    + f.size + " bytes, last modified: " + f.lastModifiedDate;

            FileReader reader = new FileReader();
            reader.onprogress = e -> { out.innerHTML += "<li>"+ e.loaded / e.total; return null; };
            reader.readAsBinaryString(f);
        }
    }

    private static void consume(Event e) { e.stopPropagation(); e.preventDefault(); }
}
