r.d(t, {
    G: () => v,
    Z: () => T
}),
    r(47120),
    r(566702);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    s = r(91192),
    o = r(481060),
    c = r(385499),
    d = r(600164),
    u = r(313201),
    m = r(565138),
    x = r(631969),
    h = r(605436),
    b = r(537383),
    y = r(71080),
    f = r(388032),
    p = r(208838);
let g = (0, u.hQ)(),
    j = (0, u.hQ)();
function v(e) {
    return ''.concat(e.rowType, ':').concat(e.id);
}
function E(e) {
    return (0, n.jsx)(
        o.vwX,
        {
            tag: 'h5',
            className: a()(p.sectionTitle, p.rowHeight),
            children: e
        },
        e
    );
}
function S(e) {
    var t, r;
    let { id: l, children: i, rowLabel: c, checked: u, onSelect: m, disabled: x, showCheckbox: h, selected: b, onMouseEnter: y, 'aria-posinset': f, 'aria-setsize': g } = e,
        j = (0, s.JA)(l);
    return (0, n.jsx)(
        o.P3F,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, j)),
        (r = r =
            {
                id: l,
                className: a()(p.addMemberRow, { [p.selectedRow]: b }),
                onClick: (e) => {
                    x || (e.preventDefault(), m());
                },
                onMouseEnter: y,
                role: 'option',
                'aria-disabled': x,
                'aria-selected': u,
                'aria-setsize': g,
                'aria-posinset': f,
                children: (0, n.jsxs)(d.Z, {
                    justify: d.Z.Justify.BETWEEN,
                    align: d.Z.Align.CENTER,
                    children: [
                        h
                            ? (0, n.jsx)(o.XZJ, {
                                  displayOnly: !0,
                                  size: 18,
                                  value: u,
                                  type: o.XZJ.Types.INVERTED,
                                  disabled: x,
                                  children: (0, n.jsx)('div', {
                                      className: p.checkboxLabel,
                                      children: i
                                  })
                              })
                            : i,
                        null != c
                            ? (0, n.jsx)(o.Text, {
                                  color: 'text-muted',
                                  variant: 'text-xs/normal',
                                  children: c
                              })
                            : null
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
function T(e) {
    let { listClassName: t, pendingAdditions: r, query: i, onQueryChange: s, onClickRow: u, onRemovePendingAddition: T, roles: w = [], members: R = [], users: O = [], guilds: N = [], placeholderText: k, disabledText: C, hintText: L, searchTitleText: M, renderEmptyText: P, focusSearchAfterReady: Z, isReady: z, maxCount: A, hideRowLabel: I = !1 } = e,
        B = l.useRef(null),
        D = l.useRef(null),
        W = [w.length, R.length, O.length, N.length],
        [$, U] = l.useState(!1),
        [_, q] = l.useState(0),
        [F, G] = l.useState(-1);
    l.useEffect(() => {
        var e;
        null == (e = B.current) || e.focus();
    }, []);
    let Q = l.useCallback(function (e, t) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if ((q(e), G(t), r)) {
                var n;
                null == (n = D.current) ||
                    n.scrollToIndex({
                        section: null != e ? e : 0,
                        row: null != t ? t : 0,
                        padding: 8
                    });
            }
        }, []),
        V = l.useCallback(
            (e, t) => {
                if (null == t) return;
                s('');
                let r = (e === y.m$.ROLES ? w : [])[t];
                r.rowType !== y.aC.EMPTY_STATE && u(r);
            },
            [w, u, s]
        ),
        Y = l.useCallback(
            (e) => {
                var t;
                null != e && e.rowType !== y.aC.EMPTY_STATE && (u(e), s(''), null == (t = B.current) || t.focus());
            },
            [u, s]
        ),
        J = l.useMemo(() => Object.keys(r), [r]),
        X = l.useMemo(() => R.some((e) => !e.disabled) || w.some((e) => !e.disabled) || O.some((e) => !e.disabled) || N.some((e) => !e.disabled), [R, w, O, N]) || '' === i.trim();
    function H() {
        var e;
        U(!(null == (e = D.current) ? void 0 : e.isScrolledToTop()) && X);
    }
    return (
        l.useEffect(() => {
            H();
        }),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: a()(p.searchBox, { [p.scrollSeparator]: $ }),
                    children: [
                        null != M &&
                            (0, n.jsx)(o.vwX, {
                                tag: o.RB0.H5,
                                children: M
                            }),
                        (0, n.jsx)(b.Z, {
                            ref: B,
                            query: i,
                            onQueryChange: s,
                            selectedSection: _,
                            selectedRow: F,
                            onSelectionChange: Q,
                            onSelect: V,
                            tags: J.map((e) => r[e].display),
                            sections: W,
                            onRemoveTag: function (e) {
                                T(J[e]);
                            },
                            placeholder: k,
                            focusAfterReady: Z,
                            isReady: z,
                            'aria-labelledby': g,
                            'aria-controls': j
                        }),
                        null != L
                            ? (0, n.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  children: L
                              })
                            : null
                    ]
                }),
                X
                    ? (0, n.jsx)(o.aVo, {
                          ref: D,
                          className: a()(p.roleMemberList, t),
                          sections: W,
                          renderRow: (e) => {
                              let t,
                                  l,
                                  { section: i, row: s } = e,
                                  d = null,
                                  u = !1,
                                  x = !1,
                                  b = !1,
                                  f = null != A && Object.keys(r).length >= A;
                              switch (i) {
                                  case y.m$.ROLES:
                                      (u = (l = v((d = w[s]))) in r || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.ROLES && F === s),
                                          (t = (0, n.jsxs)('div', {
                                              className: p.rowBody,
                                              children: [
                                                  (0, n.jsx)('div', {
                                                      className: a()(p.rowHeight, p.alignCenter),
                                                      children: (0, n.jsx)(o.lZ8, {
                                                          size: 'custom',
                                                          color: d.colorString,
                                                          height: 20
                                                      })
                                                  }),
                                                  (0, n.jsxs)('div', {
                                                      className: p.rowLabel,
                                                      children: [
                                                          (0, n.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              className: p.__invalid_rowTitle,
                                                              color: d.rowType === y.aC.EMPTY_STATE ? 'text-muted' : 'text-normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != C
                                                              ? (0, n.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: C
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case y.m$.MEMBERS:
                                      (u = (l = v((d = R[s]))) in r || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.MEMBERS && F === s),
                                          (t = (0, n.jsxs)('div', {
                                              className: p.rowBody,
                                              children: [
                                                  (0, n.jsx)(o.qEK, {
                                                      src: d.avatarURL,
                                                      size: o.EFr.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, n.jsx)(o.Text, {
                                                      className: p.rowLabel,
                                                      variant: 'text-sm/normal',
                                                      children: d.name
                                                  }),
                                                  null != d.nickname
                                                      ? (0, n.jsx)(o.Text, {
                                                            color: 'text-muted',
                                                            className: p.rowLabelSubText,
                                                            variant: 'text-sm/normal',
                                                            'aria-hidden': !0,
                                                            children: d.username
                                                        })
                                                      : null,
                                                  d.bot && (0, n.jsx)(c.Z, { verified: d.verifiedBot })
                                              ]
                                          }));
                                      break;
                                  case y.m$.USERS:
                                      (u = (l = v((d = O[s]))) in r || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.USERS && F === s),
                                          (t = (0, n.jsxs)('div', {
                                              className: p.rowBody,
                                              children: [
                                                  (0, n.jsx)(o.qEK, {
                                                      src: d.avatarURL,
                                                      size: o.EFr.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, n.jsxs)('div', {
                                                      className: p.rowLabel,
                                                      children: [
                                                          (0, n.jsx)(o.Text, {
                                                              variant: 'text-sm/normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != C
                                                              ? (0, n.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: C
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case y.m$.GUILDS:
                                      (u = (l = v((d = N[s]))) in r || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.GUILDS && F === s),
                                          (t = (0, n.jsxs)('div', {
                                              className: p.rowBody,
                                              children: [
                                                  (0, n.jsx)(m.Z, {
                                                      guild: d.guild,
                                                      active: !0,
                                                      size: m.Z.Sizes.SMALLER
                                                  }),
                                                  (0, n.jsx)('div', {
                                                      className: p.rowLabel,
                                                      children: (0, n.jsx)(o.Text, {
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
                                  : (0, n.jsx)(
                                        S,
                                        {
                                            id: 'user-row-'.concat(s),
                                            rowLabel: I ? null : h.zB(d.rowType),
                                            checked: u,
                                            disabled: x,
                                            onSelect: () => Y(d),
                                            showCheckbox: d.rowType !== y.aC.EMPTY_STATE,
                                            onMouseEnter: () => Q(i, s, !1),
                                            selected: b,
                                            'aria-posinset': s + 1,
                                            'aria-setsize': W.reduce((e, t) => e + t, 0),
                                            children: t
                                        },
                                        l
                                    );
                          },
                          rowHeight: 40,
                          renderSection: (e) => {
                              let { section: t } = e;
                              switch (t) {
                                  case y.m$.ROLES:
                                      return E(f.NW.string(f.t.LPJmLy));
                                  case y.m$.MEMBERS:
                                      return E(f.NW.string(f.t['9Oq93t']));
                                  case y.m$.USERS:
                                      return E(f.NW.string(f.t.nqDUBQ));
                                  case y.m$.GUILDS:
                                      return E(f.NW.string(f.t['7hB4kp']));
                              }
                          },
                          sectionHeight: 32,
                          onScroll: H,
                          role: void 0,
                          innerRole: 'listbox',
                          innerId: j,
                          innerAriaMultiselectable: !0,
                          innerAriaOrientation: 'vertical'
                      })
                    : (0, n.jsxs)(d.Z, {
                          className: t,
                          align: d.Z.Align.CENTER,
                          justify: d.Z.Justify.CENTER,
                          direction: d.Z.Direction.VERTICAL,
                          children: [
                              (0, n.jsx)(x.Z, { className: p.noResultIcon }),
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: P(i)
                              })
                          ]
                      })
            ]
        })
    );
}
