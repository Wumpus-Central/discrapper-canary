"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(608299),
    u = n(817363),
    c = n(565150),
    d = n(31717),
    _ = n(522602),
    f = n(349688),
    p = n(914905),
    h = n(652215),
    m = n(985018),
    g = n(273764),
    E = n(127243);
function A(e) {
    let { channelId: t, option: n, keyboardModeEnabled: a } = e,
        A = i.useRef(null),
        [I, T] = i.useState(!1),
        y = _.A.getUpload(t, n.name, d.C.SlashCommand),
        S = i.useRef(null),
        v = (e) => {
            e.which === h.Ks6.ENTER && (e.preventDefault(), A.current?.activateUploadDialogue());
        },
        C = i.useCallback(() => {
            T(!0);
        }, []),
        b = i.useCallback(() => {
            T(!1);
        }, []),
        N = i.useCallback(
            (e) => {
                T(!1);
                let r = { id: n.name, file: e.dataTransfer?.files[0], platform: c.xz.WEB, origin: "drag_drop" };
                l.A.setFile({ channelId: t, id: n.name, file: r, draftType: d.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    i.useEffect(() => {
        let e = S.current;
        return (
            null == y &&
                (e?.addEventListener("dragover", C, !1),
                e?.addEventListener("dragleave", b, !1),
                e?.addEventListener("drop", N, !1)),
            () => {
                e?.removeEventListener("dragover", C, !1),
                    e?.removeEventListener("dragleave", b, !1),
                    e?.removeEventListener("drop", N, !1);
            }
        );
    }, [y, C, b, N]);
    let R = (e) => {
        if (null != t && e.currentTarget?.files?.[0] != null) {
            let r = { id: n.name, file: e.currentTarget.files[0], platform: c.xz.WEB, origin: "file_picker" };
            l.A.setFile({ channelId: t, id: n.name, file: r, draftType: d.C.SlashCommand, allowOptimization: !1 }),
                (e.currentTarget.value = "");
        }
    };
    return null != y
        ? (0, r.jsx)(p.A, {
              channelId: t,
              upload: y,
              keyboardModeEnabled: a,
              draftType: d.C.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Text, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: y.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, r.jsxs)(f.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: a,
              onKeyDown: v,
              className: s()(g.xd, { [g.LB]: I }),
              draftType: d.C.SlashCommand,
              ref: S,
              children: [
                  (0, r.jsx)("span", { className: s()(g.fS, { [g.Vg]: I }), children: n.displayName }),
                  (0, r.jsx)(o.DUT, {
                      className: g.uN,
                      onClick: () => A.current?.activateUploadDialogue(),
                      children: (0, r.jsxs)("div", {
                          className: g.wi,
                          children: [
                              (0, r.jsx)("img", { src: E, className: g.H9, alt: "" }),
                              (0, r.jsx)(o.Text, {
                                  className: g.L,
                                  variant: "text-sm/normal",
                                  children: m.intl.string(m.t.IJyOUf),
                              }),
                              (0, r.jsx)(u.A, {
                                  ref: A,
                                  onChange: R,
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
