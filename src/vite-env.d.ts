/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_MAP_URL: string;
  readonly VITE_MAP_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
