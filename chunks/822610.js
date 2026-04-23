"use strict";
n.d(t, { A: () => k }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(741918),
    d = n(17928),
    _ = n(228366),
    u = n(608299),
    c = n(155718),
    E = n(775602),
    h = n(260762),
    m = n(861382),
    f = n(522602),
    g = n(234320),
    p = n(215497),
    A = n(834730),
    I = n(939249),
    T = n(780777),
    S = n(565150),
    N = n(31717),
    C = n(914905),
    R = n(650583),
    O = n(985018),
    y = n(402913);
function v(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        o = r.useRef(null),
        [l, d] = r.useState(!1),
        _ = f.A.getUpload(t, n.name, N.C.SlashCommand),
        c = r.useRef(null),
        E = r.useCallback(() => {
            d(!0);
        }, []),
        h = r.useCallback(() => {
            d(!1);
        }, []),
        m = r.useCallback(
            (e) => {
                d(!1);
                let i = { id: n.name, file: e.dataTransfer?.files[0], platform: S.xz.WEB, origin: "drag_drop" };
                u.A.setFile({ channelId: t, id: n.name, file: i, draftType: N.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    return (r.useEffect(() => {
        let e = c.current;
        return (
            null == _ &&
                (e?.addEventListener("dragover", E, !1),
                e?.addEventListener("dragleave", h, !1),
                e?.addEventListener("drop", m, !1)),
            () => {
                e?.removeEventListener("dragover", E, !1),
                    e?.removeEventListener("dragleave", h, !1),
                    e?.removeEventListener("drop", m, !1);
            }
        );
    }, [_, E, h, m]),
    null != _)
        ? (0, i.jsx)(C.A, {
              channelId: t,
              upload: _,
              keyboardModeEnabled: s,
              draftType: N.C.SlashCommand,
              label: (0, i.jsxs)(r.Fragment, {
                  children: [
                      (0, i.jsxs)(A.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, i.jsx)(A.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: _.filename,
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
                  e.key === R.dh.ENTER && (e.preventDefault(), o.current?.activateUploadDialogue());
              },
              className: a()(y.xd, { [y.LB]: l }),
              draftType: N.C.SlashCommand,
              ref: c,
              children: [
                  (0, i.jsx)("span", { className: a()(y.fS, { [y.Vg]: l }), children: n.displayName }),
                  (0, i.jsx)(I.D, {
                      className: y.uN,
                      onClick: () => o.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: y.wi,
                          children: [
                              (0, i.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: y.H9, alt: "" }),
                              (0, i.jsx)(A.E, {
                                  className: y.L,
                                  variant: "text-sm/normal",
                                  children: O.intl.string(O.t.IJyOUf),
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
                                          u.A.setFile({
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
                                  className: y.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var D = n(652215),
    L = n(386016),
    b = n(429128);
let w = [];
function P(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: A = !1 } = e,
        I = (0, d.bG)([E.A], () => E.A.keyboardModeEnabled),
        T = (0, h.A)("attachments", l.Gl.HORIZONTAL),
        S = (0, d.bG)([f.A], () => f.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: N,
            commandOptions: R,
            commandOptionStates: O,
        } = (0, d.cf)([m.A], () => {
            let e = m.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: w, commandOptionStates: null };
            let n = m.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        y = r.useMemo(() => R?.filter((e) => e.type === c.n4.ATTACHMENT && O?.[e.name]?.hasValue) ?? [], [R, O]),
        [P, k] = r.useState([]);
    r.useEffect(() => {
        let e = () => {
            u.A.clearAll(t, n.drafts.type);
        };
        return (
            _.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => _.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let M = r.useCallback(() => {
        T.focusFirstVisibleItem();
    }, [T]);
    (0, g.Vo)({ event: D.jej.FOCUS_ATTACHMENT_AREA, handler: M });
    let U = { isApplicationCommand: N, previousUploadOptions: P, uploadOptions: y },
        x = r.useRef(U);
    r.useEffect(() => {
        x.current = U;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = x.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    r.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        u.A.remove(t, e.name, n.drafts.type);
                    }),
                    k(r);
            }
        }, [t, y.length, n]);
    let G = S.filter((e) => e.filename !== s);
    return (!N && 0 === G.length) || (N && 0 === y.length)
        ? null
        : (0, i.jsx)(o.hD, {
              navigator: T,
              children: (0, i.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: r, ...s } = e;
                      return (0, i.jsx)("ul", {
                          ref: r,
                          ...s,
                          className: a()(L.I, b.KK),
                          children: N
                              ? y.map((e) => (0, i.jsx)(v, { channelId: t, keyboardModeEnabled: I, option: e }, e.name))
                              : G.map((e) =>
                                    (0, i.jsx)(
                                        C.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: I,
                                            clip: e.clip,
                                            size: A ? p.L.SMALL : p.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let k = r.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: r, ignoreFile: s, smallAttachments: a = !1 } = e;
    return r ? (0, i.jsx)(P, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
});
