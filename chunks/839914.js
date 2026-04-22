"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(608299),
    u = n(817363),
    c = n(565150),
    d = n(31717),
    _ = n(522602),
    f = n(349688),
    p = n(914905),
    h = n(650583),
    m = n(985018),
    E = n(402913),
    g = n(127243);
function A(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        A = i.useRef(null),
        [I, T] = i.useState(!1),
        S = _.A.getUpload(t, n.name, d.C.SlashCommand),
        y = i.useRef(null),
        v = (e) => {
            e.key === h.dh.ENTER && (e.preventDefault(), A.current?.activateUploadDialogue());
        },
        N = i.useCallback(() => {
            T(!0);
        }, []),
        C = i.useCallback(() => {
            T(!1);
        }, []),
        R = i.useCallback(
            (e) => {
                T(!1);
                let r = { id: n.name, file: e.dataTransfer?.files[0], platform: c.xz.WEB, origin: "drag_drop" };
                l.A.setFile({ channelId: t, id: n.name, file: r, draftType: d.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    i.useEffect(() => {
        let e = y.current;
        return (
            null == S &&
                (e?.addEventListener("dragover", N, !1),
                e?.addEventListener("dragleave", C, !1),
                e?.addEventListener("drop", R, !1)),
            () => {
                e?.removeEventListener("dragover", N, !1),
                    e?.removeEventListener("dragleave", C, !1),
                    e?.removeEventListener("drop", R, !1);
            }
        );
    }, [S, N, C, R]);
    let O = (e) => {
        if (null != t && e.currentTarget?.files?.[0] != null) {
            let r = { id: n.name, file: e.currentTarget.files[0], platform: c.xz.WEB, origin: "file_picker" };
            l.A.setFile({ channelId: t, id: n.name, file: r, draftType: d.C.SlashCommand, allowOptimization: !1 }),
                (e.currentTarget.value = "");
        }
    };
    return null != S
        ? (0, r.jsx)(p.A, {
              channelId: t,
              upload: S,
              keyboardModeEnabled: s,
              draftType: d.C.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Text, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: S.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, r.jsxs)(f.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: v,
              className: a()(E.xd, { [E.LB]: I }),
              draftType: d.C.SlashCommand,
              ref: y,
              children: [
                  (0, r.jsx)("span", { className: a()(E.fS, { [E.Vg]: I }), children: n.displayName }),
                  (0, r.jsx)(o.DUT, {
                      className: E.uN,
                      onClick: () => A.current?.activateUploadDialogue(),
                      children: (0, r.jsxs)("div", {
                          className: E.wi,
                          children: [
                              (0, r.jsx)("img", { src: g, className: E.H9, alt: "" }),
                              (0, r.jsx)(o.Text, {
                                  className: E.L,
                                  variant: "text-sm/normal",
                                  children: m.intl.string(m.t.IJyOUf),
                              }),
                              (0, r.jsx)(u.A, {
                                  ref: A,
                                  onChange: O,
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: E.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
