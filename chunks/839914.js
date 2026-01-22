n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(608299),
    c = n(817363),
    u = n(565150),
    d = n(31717),
    f = n(522602),
    p = n(349688),
    _ = n(914905),
    h = n(652215),
    m = n(985018),
    g = n(273764),
    E = n(127243);
function b(e) {
    let { channelId: t, option: n, keyboardModeEnabled: a } = e,
        b = i.useRef(null),
        [y, O] = i.useState(!1),
        A = f.A.getUpload(t, n.name, d.C.SlashCommand),
        v = i.useRef(null),
        S = (e) => {
            if (e.which === h.Ks6.ENTER) {
                var t;
                e.preventDefault(), null == (t = b.current) || t.activateUploadDialogue();
            }
        },
        I = i.useCallback(() => {
            O(!0);
        }, []),
        T = i.useCallback(() => {
            O(!1);
        }, []),
        C = i.useCallback(
            (e) => {
                var r;
                O(!1);
                let i = {
                    id: n.name,
                    file: null == (r = e.dataTransfer) ? void 0 : r.files[0],
                    platform: u.xz.WEB,
                    origin: "drag_drop",
                };
                l.A.setFile({
                    channelId: t,
                    id: n.name,
                    file: i,
                    draftType: d.C.SlashCommand,
                    allowOptimization: !1,
                });
            },
            [t, n],
        );
    i.useEffect(() => {
        let e = v.current;
        return (
            null == A &&
                (null == e || e.addEventListener("dragover", I, !1),
                null == e || e.addEventListener("dragleave", T, !1),
                null == e || e.addEventListener("drop", C, !1)),
            () => {
                null == e || e.removeEventListener("dragover", I, !1),
                    null == e || e.removeEventListener("dragleave", T, !1),
                    null == e || e.removeEventListener("drop", C, !1);
            }
        );
    }, [A, I, T, C]);
    let N = (e) => {
        var r, i;
        if (null != t && (null == (i = e.currentTarget) || null == (r = i.files) ? void 0 : r[0]) != null) {
            let r = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: u.xz.WEB,
                origin: "file_picker",
            };
            l.A.setFile({
                channelId: t,
                id: n.name,
                file: r,
                draftType: d.C.SlashCommand,
                allowOptimization: !1,
            }),
                (e.currentTarget.value = "");
        }
    };
    return null != A
        ? (0, r.jsx)(_.A, {
              channelId: t,
              upload: A,
              keyboardModeEnabled: a,
              draftType: d.C.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          children: [n.displayName, ": "],
                      }),
                      (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: A.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, r.jsxs)(p.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: a,
              onKeyDown: S,
              className: s()(g.xd, { [g.LB]: y }),
              draftType: d.C.SlashCommand,
              ref: v,
              children: [
                  (0, r.jsx)("span", {
                      className: s()(g.fS, { [g.Vg]: y }),
                      children: n.displayName,
                  }),
                  (0, r.jsx)(o.DUT, {
                      className: g.uN,
                      onClick: () => {
                          var e;
                          return null == (e = b.current) ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, r.jsxs)("div", {
                          className: g.wi,
                          children: [
                              (0, r.jsx)("img", {
                                  src: E,
                                  className: g.H9,
                                  alt: "",
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: g.L,
                                  variant: "text-sm/normal",
                                  children: m.intl.string(m.t.IJyOUf),
                              }),
                              (0, r.jsx)(c.A, {
                                  ref: b,
                                  onChange: N,
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
