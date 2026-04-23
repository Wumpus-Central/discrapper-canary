"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(939249),
    u = n(608299),
    c = n(817363),
    d = n(565150),
    _ = n(31717),
    f = n(522602),
    p = n(349688),
    h = n(914905),
    E = n(650583),
    m = n(985018),
    g = n(402913),
    A = n(127243);
function I(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        I = i.useRef(null),
        [T, S] = i.useState(!1),
        y = f.A.getUpload(t, n.name, _.C.SlashCommand),
        N = i.useRef(null),
        v = i.useCallback(() => {
            S(!0);
        }, []),
        C = i.useCallback(() => {
            S(!1);
        }, []),
        O = i.useCallback(
            (e) => {
                S(!1);
                let r = { id: n.name, file: e.dataTransfer?.files[0], platform: d.xz.WEB, origin: "drag_drop" };
                u.A.setFile({ channelId: t, id: n.name, file: r, draftType: _.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    return (i.useEffect(() => {
        let e = N.current;
        return (
            null == y &&
                (e?.addEventListener("dragover", v, !1),
                e?.addEventListener("dragleave", C, !1),
                e?.addEventListener("drop", O, !1)),
            () => {
                e?.removeEventListener("dragover", v, !1),
                    e?.removeEventListener("dragleave", C, !1),
                    e?.removeEventListener("drop", O, !1);
            }
        );
    }, [y, v, C, O]),
    null != y)
        ? (0, r.jsx)(h.A, {
              channelId: t,
              upload: y,
              keyboardModeEnabled: s,
              draftType: _.C.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(o.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, r.jsx)(o.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: y.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, r.jsxs)(p.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: (e) => {
                  e.key === E.dh.ENTER && (e.preventDefault(), I.current?.activateUploadDialogue());
              },
              className: a()(g.xd, { [g.LB]: T }),
              draftType: _.C.SlashCommand,
              ref: N,
              children: [
                  (0, r.jsx)("span", { className: a()(g.fS, { [g.Vg]: T }), children: n.displayName }),
                  (0, r.jsx)(l.D, {
                      className: g.uN,
                      onClick: () => I.current?.activateUploadDialogue(),
                      children: (0, r.jsxs)("div", {
                          className: g.wi,
                          children: [
                              (0, r.jsx)("img", { src: A, className: g.H9, alt: "" }),
                              (0, r.jsx)(o.E, {
                                  className: g.L,
                                  variant: "text-sm/normal",
                                  children: m.intl.string(m.t.IJyOUf),
                              }),
                              (0, r.jsx)(c.A, {
                                  ref: I,
                                  onChange: (e) => {
                                      if (null != t && e.currentTarget?.files?.[0] != null) {
                                          let r = {
                                              id: n.name,
                                              file: e.currentTarget.files[0],
                                              platform: d.xz.WEB,
                                              origin: "file_picker",
                                          };
                                          u.A.setFile({
                                              channelId: t,
                                              id: n.name,
                                              file: r,
                                              draftType: _.C.SlashCommand,
                                              allowOptimization: !1,
                                          }),
                                              (e.currentTarget.value = "");
                                      }
                                  },
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: g.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
