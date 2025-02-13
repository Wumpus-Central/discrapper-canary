n.d(t, {
    G: () => p,
    Z: () => f
}),
    n(47120),
    n(724458);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(91192),
    o = n(481060),
    c = n(385499),
    d = n(600164),
    u = n(313201),
    x = n(565138),
    m = n(631969),
    h = n(605436),
    g = n(537383),
    E = n(71080),
    b = n(388032),
    T = n(929434);
let y = (0, u.hQ)(),
    j = (0, u.hQ)();
function p(e) {
    return ''.concat(e.rowType, ':').concat(e.id);
}
function R(e) {
    return (0, l.jsx)(
        o.vwX,
        {
            tag: 'h5',
            className: r()(T.sectionTitle, T.rowHeight),
            children: e
        },
        e
    );
}
function S(e) {
    let { id: t, children: n, rowLabel: i, checked: s, onSelect: c, disabled: u, showCheckbox: x, selected: m, onMouseEnter: h, 'aria-posinset': g, 'aria-setsize': E } = e,
        b = (0, a.JA)(t);
    return (0, l.jsx)(o.P3F, {
        ...b,
        id: t,
        className: r()(T.addMemberRow, { [T.selectedRow]: m }),
        onClick: (e) => {
            u || (e.preventDefault(), c());
        },
        onMouseEnter: h,
        role: 'option',
        'aria-disabled': u,
        'aria-selected': s,
        'aria-setsize': E,
        'aria-posinset': g,
        children: (0, l.jsxs)(d.Z, {
            justify: d.Z.Justify.BETWEEN,
            align: d.Z.Align.CENTER,
            children: [
                x
                    ? (0, l.jsx)(o.XZJ, {
                          displayOnly: !0,
                          size: 18,
                          value: s,
                          type: o.XZJ.Types.INVERTED,
                          disabled: u,
                          children: (0, l.jsx)('div', {
                              className: T.checkboxLabel,
                              children: n
                          })
                      })
                    : n,
                null != i
                    ? (0, l.jsx)(o.Text, {
                          color: 'text-muted',
                          variant: 'text-xs/normal',
                          children: i
                      })
                    : null
            ]
        })
    });
}
function f(e) {
    let { listClassName: t, pendingAdditions: n, query: s, onQueryChange: a, onClickRow: u, onRemovePendingAddition: f, roles: v = [], members: w = [], users: C = [], guilds: L = [], placeholderText: k, disabledText: N, hintText: M, searchTitleText: Z, renderEmptyText: z, focusSearchAfterReady: A, isReady: I, maxCount: O, hideRowLabel: B = !1 } = e,
        P = i.useRef(null),
        D = i.useRef(null),
        $ = [v.length, w.length, C.length, L.length],
        [U, _] = i.useState(!1),
        [q, F] = i.useState(0),
        [G, Q] = i.useState(-1);
    i.useEffect(() => {
        var e;
        null === (e = P.current) || void 0 === e || e.focus();
    }, []);
    let V = i.useCallback(function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if ((F(e), Q(t), n)) {
                var l;
                null === (l = D.current) ||
                    void 0 === l ||
                    l.scrollToIndex({
                        section: null != e ? e : 0,
                        row: null != t ? t : 0,
                        padding: 8
                    });
            }
        }, []),
        Y = i.useCallback(
            (e, t) => {
                if (null == t) return;
                a('');
                let n = (e === E.m$.ROLES ? v : [])[t];
                n.rowType !== E.aC.EMPTY_STATE && u(n);
            },
            [v, u, a]
        ),
        J = i.useCallback(
            (e) => {
                var t;
                null != e && e.rowType !== E.aC.EMPTY_STATE && (u(e), a(''), null === (t = P.current) || void 0 === t || t.focus());
            },
            [u, a]
        ),
        X = i.useMemo(() => Object.keys(n), [n]),
        H = i.useMemo(() => w.some((e) => !e.disabled) || v.some((e) => !e.disabled) || C.some((e) => !e.disabled) || L.some((e) => !e.disabled), [w, v, C, L]) || '' === s.trim();
    function W() {
        var e;
        _(!(null === (e = D.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && H);
    }
    return (
        i.useEffect(() => {
            W();
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: r()(T.searchBox, { [T.scrollSeparator]: U }),
                    children: [
                        null != Z &&
                            (0, l.jsx)(o.vwX, {
                                tag: o.RB0.H5,
                                children: Z
                            }),
                        (0, l.jsx)(g.Z, {
                            ref: P,
                            query: s,
                            onQueryChange: a,
                            selectedSection: q,
                            selectedRow: G,
                            onSelectionChange: V,
                            onSelect: Y,
                            tags: X.map((e) => n[e].display),
                            sections: $,
                            onRemoveTag: function (e) {
                                f(X[e]);
                            },
                            placeholder: k,
                            focusAfterReady: A,
                            isReady: I,
                            'aria-labelledby': y,
                            'aria-controls': j
                        }),
                        null != M
                            ? (0, l.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  children: M
                              })
                            : null
                    ]
                }),
                H
                    ? (0, l.jsx)(o.aVo, {
                          ref: D,
                          className: r()(T.roleMemberList, t),
                          sections: $,
                          renderRow: (e) => {
                              let t,
                                  i,
                                  { section: s, row: a } = e,
                                  d = null,
                                  u = !1,
                                  m = !1,
                                  g = !1,
                                  b = null != O && Object.keys(n).length >= O;
                              switch (s) {
                                  case E.m$.ROLES:
                                      (u = (i = p((d = v[a]))) in n || d.disabled),
                                          (m = d.disabled || (!u && b)),
                                          (g = q === E.m$.ROLES && G === a),
                                          (t = (0, l.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, l.jsx)('div', {
                                                      className: r()(T.rowHeight, T.alignCenter),
                                                      children: (0, l.jsx)(o.lZ8, {
                                                          size: 'custom',
                                                          color: d.colorString,
                                                          height: 20
                                                      })
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                      className: T.rowLabel,
                                                      children: [
                                                          (0, l.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              className: T.__invalid_rowTitle,
                                                              color: d.rowType === E.aC.EMPTY_STATE ? 'text-muted' : 'text-normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != N
                                                              ? (0, l.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: N
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case E.m$.MEMBERS:
                                      (u = (i = p((d = w[a]))) in n || d.disabled),
                                          (m = d.disabled || (!u && b)),
                                          (g = q === E.m$.MEMBERS && G === a),
                                          (t = (0, l.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, l.jsx)(o.qEK, {
                                                      src: d.avatarURL,
                                                      size: o.EFr.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, l.jsx)(o.Text, {
                                                      className: T.rowLabel,
                                                      variant: 'text-sm/normal',
                                                      children: d.name
                                                  }),
                                                  null != d.nickname
                                                      ? (0, l.jsx)(o.Text, {
                                                            color: 'text-muted',
                                                            className: T.rowLabelSubText,
                                                            variant: 'text-sm/normal',
                                                            'aria-hidden': !0,
                                                            children: d.username
                                                        })
                                                      : null,
                                                  d.bot && (0, l.jsx)(c.Z, { verified: d.verifiedBot })
                                              ]
                                          }));
                                      break;
                                  case E.m$.USERS:
                                      (u = (i = p((d = C[a]))) in n || d.disabled),
                                          (m = d.disabled || (!u && b)),
                                          (g = q === E.m$.USERS && G === a),
                                          (t = (0, l.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, l.jsx)(o.qEK, {
                                                      src: d.avatarURL,
                                                      size: o.EFr.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                      className: T.rowLabel,
                                                      children: [
                                                          (0, l.jsx)(o.Text, {
                                                              variant: 'text-sm/normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != N
                                                              ? (0, l.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: N
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case E.m$.GUILDS:
                                      (u = (i = p((d = L[a]))) in n || d.disabled),
                                          (m = d.disabled || (!u && b)),
                                          (g = q === E.m$.GUILDS && G === a),
                                          (t = (0, l.jsxs)('div', {
                                              className: T.rowBody,
                                              children: [
                                                  (0, l.jsx)(x.Z, {
                                                      guild: d.guild,
                                                      active: !0,
                                                      size: x.Z.Sizes.SMALLER
                                                  }),
                                                  (0, l.jsx)('div', {
                                                      className: T.rowLabel,
                                                      children: (0, l.jsx)(o.Text, {
                                                          variant: 'text-sm/medium',
                                                          color: 'text-normal',
                                                          children: d.name
                                                      })
                                                  })
                                              ]
                                          }));
                              }
                              return null == d
                                  ? null
                                  : (0, l.jsx)(
                                        S,
                                        {
                                            id: 'user-row-'.concat(a),
                                            rowLabel: B ? null : h.zB(d.rowType),
                                            checked: u,
                                            disabled: m,
                                            onSelect: () => J(d),
                                            showCheckbox: d.rowType !== E.aC.EMPTY_STATE,
                                            onMouseEnter: () => V(s, a, !1),
                                            selected: g,
                                            'aria-posinset': a + 1,
                                            'aria-setsize': $.reduce((e, t) => e + t, 0),
                                            children: t
                                        },
                                        i
                                    );
                          },
                          rowHeight: 40,
                          renderSection: (e) => {
                              let { section: t } = e;
                              switch (t) {
                                  case E.m$.ROLES:
                                      return R(b.intl.string(b.t.LPJmLy));
                                  case E.m$.MEMBERS:
                                      return R(b.intl.string(b.t['9Oq93t']));
                                  case E.m$.USERS:
                                      return R(b.intl.string(b.t.nqDUBQ));
                                  case E.m$.GUILDS:
                                      return R(b.intl.string(b.t['7hB4kp']));
                              }
                          },
                          sectionHeight: 32,
                          onScroll: W,
                          role: void 0,
                          innerRole: 'listbox',
                          innerId: j,
                          innerAriaMultiselectable: !0,
                          innerAriaOrientation: 'vertical'
                      })
                    : (0, l.jsxs)(d.Z, {
                          className: t,
                          align: d.Z.Align.CENTER,
                          justify: d.Z.Justify.CENTER,
                          direction: d.Z.Direction.VERTICAL,
                          children: [
                              (0, l.jsx)(m.Z, { className: T.noResultIcon }),
                              (0, l.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: z(s)
                              })
                          ]
                      })
            ]
        })
    );
}
