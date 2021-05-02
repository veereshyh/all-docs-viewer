import "./styles.css";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function App() {
  const docs = [
    { uri: require("../public/custom.pdf") },
    { uri: require("../public/dummy.pdf") },
    { uri: require("../public/document.doc") },
    { uri: require("../public/excel.xlsx") }
  ];

  return (
    <div className="App">
      <h1>Sample react-doc-viewer</h1>
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false
          }
        }}
        style={{ height: 1000 }}
      />
    </div>
  );
}
