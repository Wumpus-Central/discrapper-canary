n.d(t, { A: () => w }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(17928),
    c = n(228366),
    d = n(608299),
    h = n(155718),
    m = n(775602),
    f = n(260762),
    p = n(861382),
    g = n(522602),
    x = n(234320),
    A = n(215497),
    E = n(834730),
    C = n(939249),
    I = n(780777),
    y = n(565150),
    S = n(424170),
    N = n(31717),
    v = n(914905),
    _ = n(650583),
    T = n(375708),
    j = n(40974);
function b(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = g.A.getUpload(t, n.name, N.C.SlashCommand),
        m = i.useRef(null),
        f = n.type === h.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: p,
            typesFormattedString: x,
            validateFilenames: b,
            showInvalidFileTypeAlert: R,
        } = (0, S.M1)(f),
        O = i.useCallback(() => {
            u(!0);
        }, []),
        M = i.useCallback(() => {
            u(!1);
        }, []),
        L = i.useCallback(
            (e, l) => {
                if (p.length > 0 && !b([e.name])) return R();
                let i = { id: n.name, file: e, platform: y.xz.WEB, origin: l };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: N.C.SlashCommand, allowOptimization: !1 });
            },
            [p.length, b, n.name, t, R],
        ),
        k = i.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && L(t, "drag_drop");
            },
            [L],
        );
    return (i.useEffect(() => {
        let e = m.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", O, !1),
                e?.addEventListener("dragleave", M, !1),
                e?.addEventListener("drop", k, !1)),
            () => {
                e?.removeEventListener("dragover", O, !1),
                    e?.removeEventListener("dragleave", M, !1),
                    e?.removeEventListener("drop", k, !1);
            }
        );
    }, [c, O, M, k]),
    null != c)
        ? (0, l.jsx)(v.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: N.C.SlashCommand,
              label: (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsxs)(E.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, l.jsx)(E.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, l.jsxs)(A.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: function (e) {
                  e.key === _.dh.ENTER && (e.preventDefault(), a.current?.activateUploadDialogue());
              },
              className: r()(j.xd, { [j.LB]: o }),
              draftType: N.C.SlashCommand,
              ref: m,
              children: [
                  (0, l.jsx)("span", { className: r()(j.fS, { [j.Vg]: o }), children: n.displayName }),
                  (0, l.jsx)(C.D, {
                      className: j.uN,
                      onClick: () => a.current?.activateUploadDialogue(),
                      children: (0, l.jsxs)("div", {
                          className: j.wi,
                          children: [
                              (0, l.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: j.H9, alt: "" }),
                              (0, l.jsx)(E.E, {
                                  className: j.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != x ? T.intl.format(T.t.JJzx48, { types: x }) : T.intl.string(T.t.IJyOUf),
                              }),
                              (0, l.jsx)(I.A, {
                                  ref: a,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (L(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: p.length > 0 ? [{ name: "", extensions: p }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: j.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var R = n(652215),
    O = n(714731),
    M = n(969490);
let L = [];
function k(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: E = !1 } = e,
        C = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
        I = (0, f.A)("attachments", o.Gl.HORIZONTAL),
        y = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: S,
            commandOptions: N,
            commandOptionStates: _,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: L, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        T = i.useMemo(() => N?.filter((e) => e.type === h.n4.ATTACHMENT && _?.[e.name]?.hasValue) ?? [], [N, _]),
        [j, k] = i.useState([]);
    i.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let w = i.useCallback(() => {
        I.focusFirstVisibleItem();
    }, [I]);
    (0, x.Vo)({ event: R.jej.FOCUS_ATTACHMENT_AREA, handler: w });
    let P = { isApplicationCommand: S, previousUploadOptions: j, uploadOptions: T },
        D = i.useRef(P);
    i.useEffect(() => {
        D.current = P;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: l, uploadOptions: i } = D.current;
            if (e) {
                let e = [];
                l.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    k(i);
            }
        }, [t, T.length, n]);
    let U = y.filter((e) => e.filename !== s);
    return (!S && 0 === U.length) || (S && 0 === T.length)
        ? null
        : (0, l.jsx)(a.hD, {
              navigator: I,
              children: (0, l.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...s,
                          className: r()(O.I, M.KK),
                          children: S
                              ? T.map((e) => (0, l.jsx)(b, { channelId: t, keyboardModeEnabled: C, option: e }, e.name))
                              : U.map((e) =>
                                    (0, l.jsx)(
                                        v.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: C,
                                            clip: e.clip,
                                            size: E ? A.L.SMALL : A.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let w = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: s, smallAttachments: r = !1 } = e;
    return i ? (0, l.jsx)(k, { channelId: t, type: n, ignoreFile: s, smallAttachments: r }) : null;
});
