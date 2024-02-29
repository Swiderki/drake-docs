import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DrakeEngine Docs",
      social: {
        github: "https://github.com/Swiderki/DrakeEngine",
      },
      sidebar: [
        {
          label: "Basics",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Quick Start", link: "/guides/quick-start/" },
            { label: "Engine", link: "/guides/engine/" },
            { label: "Scene", link: "/guides/scene/" },
            { label: "Camera", link: "/guides/camera/" },

            {
              label: "GameObjects",
              items: [
                { label: "GameObject", link: "/guides/game-object/" },
                {
                  label: "Basic GameObjects",
                  link: "/guides/basic-game-objects/",
                },
                {
                  label: "PhysicalGameObject",
                  link: "/guides/physical-game-object/",
                },
              ],
            },
            { label: "Rotation", link: "/guides/rotation/" },
            { label: "Overlap", link: "/guides/collision/" },
          ],
        },
        {
          label: "GUI",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "GUIText", link: "/gui/gui-text/" },
            { label: "Button", link: "/gui/button/" },
            { label: "Input", link: "/gui/input/" },
            { label: "Icon", link: "/gui/icon/" },
            { label: "GUIElement", link: "/gui/gui-element/" },
            { label: "GUI", link: "/gui/gui/" },
            { label: "Clickable", link: "/gui/clickable/" },
          ],
        },
        {
          label: "Math",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Vectors", link: "/math/vectors" },
            { label: "Matrixes", link: "/math/matrix" },
            { label: "Quaternions", link: "/math/quaternions" },
            { label: "Raycast", link: "/math/raycast" },
            { label: "Frustrum", link: "/math/frustrum" },
          ],
        },
      ],
    }),
  ],
});
