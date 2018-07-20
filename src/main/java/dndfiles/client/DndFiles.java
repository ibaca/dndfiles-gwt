package dndfiles.client;

import com.google.gwt.core.client.EntryPoint;
import elemental2.dom.*;
import io.reactivex.Observable;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.InputType;

import static com.intendia.rxgwt2.elemento.RxElemento.fromEvent;
import static elemental2.dom.DomGlobal.document;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.*;

// http://www.html5rocks.com/en/tutorials/file/dndfiles/
public class DndFiles implements EntryPoint {

    @Override
    public void onModuleLoad() {
        // create UI
        HTMLInputElement file = Elements.input(InputType.file).asElement();
        document.body.appendChild(file);

        HTMLOutputElement out = Elements.output().asElement();
        document.body.appendChild(out);

        // bind UI

        Observable<FileList> input$ = fromEvent(file, change)
                .map(e -> file.files);
        Observable<FileList> drop$ = fromEvent(document.body, drop)
                .map(e -> consume(e).dataTransfer.files);
        Observable.merge(input$, drop$).subscribe(files -> {
            for (int i = 0; i < files.length; i++) {
                File f = files.item(i);
                out.appendChild(li()
                        .add(strong().textContent(f.name))
                        .add(span().textContent(" (" + f.type + ") - " + f.size + "bytes"))
                        .asElement());

                HTMLLIElement li = li().asElement();
                out.appendChild(li);

                FileReader reader = new FileReader();
                reader.onprogress = e -> li.textContent = (e.loaded / e.total) + " progress";
                reader.onload = e -> li.textContent = reader.result.asString().substring(0, 100);
                reader.readAsBinaryString(f);
            }
        });
        fromEvent(document.body, dragover)
                .subscribe(e -> consume(e).dataTransfer.dropEffect = "copy");
    }

    private static <E extends Event> E consume(E e) {
        e.stopPropagation();
        e.preventDefault();
        return e;
    }
}
