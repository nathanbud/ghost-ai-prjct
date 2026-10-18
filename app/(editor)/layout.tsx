import { EditorShell } from "@/components/editor/editor-shell";

export default function EditorLayout({ children }: LayoutProps<"/">) {
  return <EditorShell>{children}</EditorShell>;
}
