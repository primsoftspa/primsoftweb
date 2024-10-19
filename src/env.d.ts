/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SERVICEID: string;
  readonly VITE_TEMPLATEID: string;
  readonly VITE_PUBLICKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}