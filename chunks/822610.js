"use strict";
n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(741918),
    u = n(17928),
    c = n(228366),
    d = n(608299),
    _ = n(155718),
    h = n(775602),
    f = n(260762),
    p = n(861382),
    E = n(522602),
    m = n(234320),
    g = n(215497),
    A = n(834730),
    I = n(939249),
    T = n(780777),
    S = n(565150),
    y = n(31717),
    C = n(914905),
    N = n(650583),
    v = n(375708),
    R = n(402913);
function O(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        o = r.useRef(null),
        [l, u] = r.useState(!1),
        c = E.A.getUpload(t, n.name, y.C.SlashCommand),
        _ = r.useRef(null),
        h = r.useCallback(() => {
            u(!0);
        }, []),
        f = r.useCallback(() => {
            u(!1);
        }, []),
        p = r.useCallback(
            (e) => {
                u(!1);
                let i = { id: n.name, file: e.dataTransfer?.files[0], platform: S.xz.WEB, origin: "drag_drop" };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: y.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    return (r.useEffect(() => {
        let e = _.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", h, !1),
                e?.addEventListener("dragleave", f, !1),
                e?.addEventListener("drop", p, !1)),
            () => {
                e?.removeEventListener("dragover", h, !1),
                    e?.removeEventListener("dragleave", f, !1),
                    e?.removeEventListener("drop", p, !1);
            }
        );
    }, [c, h, f, p]),
    null != c)
        ? (0, i.jsx)(C.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: y.C.SlashCommand,
              label: (0, i.jsxs)(r.Fragment, {
                  children: [
                      (0, i.jsxs)(A.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, i.jsx)(A.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, i.jsxs)(g.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: (e) => {
                  e.key === N.dh.ENTER && (e.preventDefault(), o.current?.activateUploadDialogue());
              },
              className: a()(R.xd, { [R.LB]: l }),
              draftType: y.C.SlashCommand,
              ref: _,
              children: [
                  (0, i.jsx)("span", { className: a()(R.fS, { [R.Vg]: l }), children: n.displayName }),
                  (0, i.jsx)(I.D, {
                      className: R.uN,
                      onClick: () => o.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: R.wi,
                          children: [
                              (0, i.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: R.H9, alt: "" }),
                              (0, i.jsx)(A.E, {
                                  className: R.L,
                                  variant: "text-sm/normal",
                                  children: v.intl.string(v.t.IJyOUf),
                              }),
                              (0, i.jsx)(T.A, {
                                  ref: o,
                                  onChange: (e) => {
                                      if (null != t && e.currentTarget?.files?.[0] != null) {
                                          let i = {
                                              id: n.name,
                                              file: e.currentTarget.files[0],
                                              platform: S.xz.WEB,
                                              origin: "file_picker",
                                          };
                                          d.A.setFile({
                                              channelId: t,
                                              id: n.name,
                                              file: i,
                                              draftType: y.C.SlashCommand,
                                              allowOptimization: !1,
                                          }),
                                              (e.currentTarget.value = "");
                                      }
                                  },
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: R.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var b = n(652215),
    D = n(386016),
    L = n(429128);
let w = [];
function M(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: A = !1 } = e,
        I = (0, u.bG)([h.Ay], () => h.Ay.keyboardModeEnabled),
        T = (0, f.A)("attachments", l.Gl.HORIZONTAL),
        S = (0, u.bG)([E.A], () => E.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: y,
            commandOptions: N,
            commandOptionStates: v,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: w, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        R = r.useMemo(() => N?.filter((e) => e.type === _.n4.ATTACHMENT && v?.[e.name]?.hasValue) ?? [], [N, v]),
        [M, P] = r.useState([]);
    r.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let x = r.useCallback(() => {
        T.focusFirstVisibleItem();
    }, [T]);
    (0, m.Vo)({ event: b.jej.FOCUS_ATTACHMENT_AREA, handler: x });
    let k = { isApplicationCommand: y, previousUploadOptions: M, uploadOptions: R },
        U = r.useRef(k);
    r.useEffect(() => {
        U.current = k;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = U.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    r.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    P(r);
            }
        }, [t, R.length, n]);
    let G = S.filter((e) => e.filename !== s);
    return (!y && 0 === G.length) || (y && 0 === R.length)
        ? null
        : (0, i.jsx)(o.hD, {
              navigator: T,
              children: (0, i.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: r, ...s } = e;
                      return (0, i.jsx)("ul", {
                          ref: r,
                          ...s,
                          className: a()(D.I, L.KK),
                          children: y
                              ? R.map((e) => (0, i.jsx)(O, { channelId: t, keyboardModeEnabled: I, option: e }, e.name))
                              : G.map((e) =>
                                    (0, i.jsx)(
                                        C.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: I,
                                            clip: e.clip,
                                            size: A ? g.L.SMALL : g.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let P = r.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: r, ignoreFile: s, smallAttachments: a = !1 } = e;
    return r ? (0, i.jsx)(M, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
});
