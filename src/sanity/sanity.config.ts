import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { SchemaTypes } from "./schema";


export const SanityConfig = defineConfig({
    name: "default",
    title: "studio",
    projectId: "zbqefj13",
    dataset: "production",
    plugins: [structureTool(), visionTool()],
    basePath: "/studio",
    schema: {
        types: SchemaTypes,
    }
});