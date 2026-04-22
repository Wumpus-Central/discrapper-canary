"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(939249),
    c = n(608299),
    u = n(817363),
    d = n(565150),
    h = n(31717),
    m = n(522602),
    p = n(349688),
    f = n(914905),
    g = n(650583),
    _ = n(985018),
    x = n(53089),
    A = n(127243);
function C(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        C = l.useRef(null),
        [E, I] = l.useState(!1),
        v = m.A.getUpload(t, n.name, h.C.SlashCommand),
        y = l.useRef(null),
        S = l.useCallback(() => {
            I(!0);
        }, []),
        b = l.useCallback(() => {
            I(!1);
        }, []),
        N = l.useCallback(
            (e) => {
                I(!1);
                let i = { id: n.name, file: e.dataTransfer?.files[0], platform: d.xz.WEB, origin: "drag_drop" };
                c.A.setFile({ channelId: t, id: n.name, file: i, draftType: h.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    return (l.useEffect(() => {
        let e = y.current;
        return (
            null == v &&
                (e?.addEventListener("dragover", S, !1),
                e?.addEventListener("dragleave", b, !1),
                e?.addEventListener("drop", N, !1)),
            () => {
                e?.removeEventListener("dragover", S, !1),
                    e?.removeEventListener("dragleave", b, !1),
                    e?.removeEventListener("drop", N, !1);
            }
        );
    }, [v, S, b, N]),
    null != v)
        ? (0, i.jsx)(f.A, {
              channelId: t,
              upload: v,
              keyboardModeEnabled: s,
              draftType: h.C.SlashCommand,
              label: (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsxs)(a.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, i.jsx)(a.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: v.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, i.jsxs)(p.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: (e) => {
                  e.key === g.dh.ENTER && (e.preventDefault(), C.current?.activateUploadDialogue());
              },
              className: r()(x.xd, { [x.LB]: E }),
              draftType: h.C.SlashCommand,
              ref: y,
              children: [
                  (0, i.jsx)("span", { className: r()(x.fS, { [x.Vg]: E }), children: n.displayName }),
                  (0, i.jsx)(o.D, {
                      className: x.uN,
                      onClick: () => C.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: x.wi,
                          children: [
                              (0, i.jsx)("img", { src: A, className: x.H9, alt: "" }),
                              (0, i.jsx)(a.E, {
                                  className: x.L,
                                  variant: "text-sm/normal",
                                  children: _.intl.string(_.t.IJyOUf),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: C,
                                  onChange: (e) => {
                                      if (null != t && e.currentTarget?.files?.[0] != null) {
                                          let i = {
                                              id: n.name,
                                              file: e.currentTarget.files[0],
                                              platform: d.xz.WEB,
                                              origin: "file_picker",
                                          };
                                          c.A.setFile({
                                              channelId: t,
                                              id: n.name,
                                              file: i,
                                              draftType: h.C.SlashCommand,
                                              allowOptimization: !1,
                                          }),
                                              (e.currentTarget.value = "");
                                      }
                                  },
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: x.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
