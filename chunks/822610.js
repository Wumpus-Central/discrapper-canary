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
    f = n(775602),
    h = n(260762),
    p = n(861382),
    E = n(522602),
    m = n(234320),
    g = n(215497),
    A = n(834730),
    I = n(939249),
    T = n(780777),
    S = n(565150),
    N = n(31717),
    y = n(914905),
    C = n(650583),
    v = n(375708),
    O = n(53089);
function R(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        o = r.useRef(null),
        [l, u] = r.useState(!1),
        c = E.A.getUpload(t, n.name, N.C.SlashCommand),
        _ = r.useRef(null),
        f = r.useCallback(() => {
            u(!0);
        }, []),
        h = r.useCallback(() => {
            u(!1);
        }, []),
        p = r.useCallback(
            (e) => {
                u(!1);
                let i = { id: n.name, file: e.dataTransfer?.files[0], platform: S.xz.WEB, origin: "drag_drop" };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: N.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    return (r.useEffect(() => {
        let e = _.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", f, !1),
                e?.addEventListener("dragleave", h, !1),
                e?.addEventListener("drop", p, !1)),
            () => {
                e?.removeEventListener("dragover", f, !1),
                    e?.removeEventListener("dragleave", h, !1),
                    e?.removeEventListener("drop", p, !1);
            }
        );
    }, [c, f, h, p]),
    null != c)
        ? (0, i.jsx)(y.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: N.C.SlashCommand,
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
                  e.key === C.dh.ENTER && (e.preventDefault(), o.current?.activateUploadDialogue());
              },
              className: a()(O.xd, { [O.LB]: l }),
              draftType: N.C.SlashCommand,
              ref: _,
              children: [
                  (0, i.jsx)("span", { className: a()(O.fS, { [O.Vg]: l }), children: n.displayName }),
                  (0, i.jsx)(I.D, {
                      className: O.uN,
                      onClick: () => o.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: O.wi,
                          children: [
                              (0, i.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: O.H9, alt: "" }),
                              (0, i.jsx)(A.E, {
                                  className: O.L,
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
                                              draftType: N.C.SlashCommand,
                                              allowOptimization: !1,
                                          }),
                                              (e.currentTarget.value = "");
                                      }
                                  },
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: O.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var b = n(652215),
    D = n(820896),
    L = n(134536);
let w = [];
function M(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: A = !1 } = e,
        I = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        T = (0, h.A)("attachments", l.Gl.HORIZONTAL),
        S = (0, u.bG)([E.A], () => E.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: N,
            commandOptions: C,
            commandOptionStates: v,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: w, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        O = r.useMemo(() => C?.filter((e) => e.type === _.n4.ATTACHMENT && v?.[e.name]?.hasValue) ?? [], [C, v]),
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
    let U = { isApplicationCommand: N, previousUploadOptions: M, uploadOptions: O },
        k = r.useRef(U);
    r.useEffect(() => {
        k.current = U;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = k.current;
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
        }, [t, O.length, n]);
    let G = S.filter((e) => e.filename !== s);
    return (!N && 0 === G.length) || (N && 0 === O.length)
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
                          children: N
                              ? O.map((e) => (0, i.jsx)(R, { channelId: t, keyboardModeEnabled: I, option: e }, e.name))
                              : G.map((e) =>
                                    (0, i.jsx)(
                                        y.A,
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
