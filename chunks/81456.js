"use strict";
n.d(t, { A: () => o });
var i = n(17928);
n(736653);
var r = n(775602),
    s = n(676279),
    a = n(788868);
function o(e) {
    return (0, i.bG)([r.A], () => r.A.useReducedMotion)
        ? (function (e) {
              switch (e) {
                  case a.e.ANIMATED_AVATAR_MODAL_UPSELL:
                      return {
                          src: "https://cdn.discordapp.com/assets/content/952d754b692331abbff51e73987a8225a8f575ab4c15c78cedd6eae52df8cfcd.png",
                          type: "image",
                      };
                  case a.e.ANIMATED_BANNER_MODAL_UPSELL:
                      return {
                          src: "https://cdn.discordapp.com/assets/content/0bc6a69d6e92680555db63e45a625c42bc8b62eb70105dcfa6aede62e92425b1.png",
                          type: "image",
                      };
                  case a.e.PROFILE_EFFECT_MODAL_UPSELL:
                      return {
                          src: "https://cdn.discordapp.com/assets/content/6326cf60bce2b7971476c1ef3f126eaab52fdc65113b2ce596dc6f560adabc4f.png",
                          type: "image",
                      };
                  case a.e.AVATAR_DECORATION_MODAL_UPSELL:
                      return {
                          src: "https://cdn.discordapp.com/assets/content/2fd9dc63d23dcb51a4b7b8f909b0d63df0e834220eb50c2a879d48bed16c3e3a.png",
                          type: "image",
                      };
              }
          })(e)
        : (function (e) {
              let t = "";
              switch (e) {
                  case a.e.ANIMATED_AVATAR_MODAL_UPSELL:
                      t = (0, s.TM)()
                          ? "https://cdn.discordapp.com/assets/content/38b6d1c30ab58051becb29ebbb532922ff7fa063b7a65a7207bdd07f48d88d27.mov"
                          : "https://cdn.discordapp.com/assets/content/ff17d0a86cea893ae6549442f7a9d59156ab55fefd763101bf3f084e66b43c9a.webm";
                      break;
                  case a.e.ANIMATED_BANNER_MODAL_UPSELL:
                      t = (0, s.TM)()
                          ? "https://cdn.discordapp.com/assets/content/258cab4b27dfced24dadf02dc43e3873695c93db5c504784f0d7f670e6d40166.mov"
                          : "https://cdn.discordapp.com/assets/content/2459a0298500b1ce2b31f7c984127b2852aefd11b8cde8d518e115489da9f01b.webm";
                      break;
                  case a.e.PROFILE_EFFECT_MODAL_UPSELL:
                      t = (0, s.TM)()
                          ? "https://cdn.discordapp.com/assets/content/253a2888f9829e1208eb8da7f182437d389340e4368db1dbe5babe31d4e1e1b4.mov"
                          : "https://cdn.discordapp.com/assets/content/d47125c033d357c8317a9d0bfdaaf4bdc6d1a7ac561a3cab0bf6096268601d32.webm";
                      break;
                  case a.e.AVATAR_DECORATION_MODAL_UPSELL:
                      t = (0, s.TM)()
                          ? "https://cdn.discordapp.com/assets/content/e97cbc4016543bebcdcbe61800ee755146b3431c5506a1aec3b36f9d4d2f9169.mov"
                          : "https://cdn.discordapp.com/assets/content/469421302ac7e523cad72caf0754f0ec871d6bf6c3c0821b524dd3f77ed63d06.webm";
              }
              return { type: "video", src: t, loop: !0 };
          })(e);
}
n(818348);
