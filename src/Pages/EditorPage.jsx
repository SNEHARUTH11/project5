import TiptapEditor from "../components/TiptapEditor";

function EditorPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Custom Tiptap Extension
      </h1>

      <TiptapEditor />
    </div>
  );
}

export default EditorPage;