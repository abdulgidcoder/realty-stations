import { defineConfig } from "vite";
import fileIncludePlugin from "vite-file-include";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import { resolve } from "path";
import { error } from "console";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  root: "src",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/app.js",
        assetFileNames: "assets/app.[ext]",
      },
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        company: path.resolve(__dirname, "src/company.html"),
        inquiries: path.resolve(__dirname, "src/inquiries.html"),
        privacy: path.resolve(__dirname, "src/privacy-policy.html"),
        project: path.resolve(__dirname, "src/single-project.html"),
        projects: path.resolve(__dirname, "src/projects.html"),
        terms: path.resolve(__dirname, "src/terms-conditions.html"),
        pricing: path.resolve(__dirname, "src/pricing.html"),
        updates: path.resolve(__dirname, "src/project-updates.html"),
        login: path.resolve(__dirname, "src/login.html"),
        register: path.resolve(__dirname, "src/register.html"),
        error: path.resolve(__dirname, "src/404.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    fileIncludePlugin({
      baseDir: "src",
      customFunctions: {
        loadSvg: function (svgFile, classes = "") {
          try {
            const cleanPath = svgFile.startsWith("/")
              ? svgFile.slice(1)
              : svgFile;
            const svgPath = path.join(
              __dirname,
              "src",
              "/assets/images/icons/" + cleanPath
            );
            if (!fs.existsSync(svgPath)) {
              console.error(`SVG file not found at path: ${svgPath}`);
              return "";
            }
            const svgContent = fs
              .readFileSync(svgPath, "utf-8")
              .replace(/<\?xml.*\?>/, "")
              .replace(/<!--.*-->/s, "")
              .trim();
            return (
              "<span class='app-icon " + classes + "'>" + svgContent + "</span>"
            );
          } catch (error) {
            console.error(`Error loading SVG file ${svgFile}:`, error);
            return "";
          }
        },
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
});
