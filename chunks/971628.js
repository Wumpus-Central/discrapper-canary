n.d(t, {
    G: function () {
        return S;
    },
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(724458);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(481060),
    c = n(385499),
    d = n(600164),
    u = n(313201),
    m = n(565138),
    x = n(631969),
    h = n(605436),
    g = n(537383),
    b = n(71080),
    T = n(388032),
    E = n(612432);
let f = (0, u.hQ)(),
    y = (0, u.hQ)();
function S(e) {
    return ''.concat(e.rowType, ':').concat(e.id);
}
function j(e) {
    return (0, l.jsx)(
        o.FormTitle,
        {
            tag: 'h5',
            className: a()(E.sectionTitle, E.rowHeight),
            children: e
        },
        e
    );
}
function p(e) {
    let { id: t, children: n, rowLabel: i, checked: r, onSelect: c, disabled: u, showCheckbox: m, selected: x, onMouseEnter: h, 'aria-posinset': g, 'aria-setsize': b } = e,
        T = (0, s.JA)(t);
    return (0, l.jsx)(o.Clickable, {
        ...T,
        id: t,
        className: a()(E.addMemberRow, { [E.selectedRow]: x }),
        onClick: (e) => {
            !u && (e.preventDefault(), c());
        },
        onMouseEnter: h,
        role: 'option',
        'aria-disabled': u,
        'aria-selected': r,
        'aria-setsize': b,
        'aria-posinset': g,
        children: (0, l.jsxs)(d.Z, {
            justify: d.Z.Justify.BETWEEN,
            align: d.Z.Align.CENTER,
            children: [
                m
                    ? (0, l.jsx)(o.Checkbox, {
                          displayOnly: !0,
                          size: 18,
                          value: r,
                          type: o.Checkbox.Types.INVERTED,
                          disabled: u,
                          children: (0, l.jsx)('div', {
                              className: E.checkboxLabel,
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
function R(e) {
    let { listClassName: t, pendingAdditions: n, query: r, onQueryChange: s, onClickRow: u, onRemovePendingAddition: R, roles: v = [], members: L = [], users: w = [], guilds: C = [], placeholderText: M, disabledText: A, hintText: N, searchTitleText: k, renderEmptyText: Z, focusSearchAfterReady: B, isReady: I, maxCount: z, hideRowLabel: O = !1 } = e,
        P = i.useRef(null),
        D = i.useRef(null),
        $ = [v.length, L.length, w.length, C.length],
        [F, U] = i.useState(!1),
        [_, G] = i.useState(0),
        [Q, V] = i.useState(-1);
    i.useEffect(() => {
        var e;
        null === (e = P.current) || void 0 === e || e.focus();
    }, []);
    let q = i.useCallback(function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if ((G(e), V(t), n)) {
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
        H = i.useCallback(
            (e, t) => {
                if (null == t) return;
                s('');
                let n = (e === b.m$.ROLES ? v : [])[t];
                n.rowType !== b.aC.EMPTY_STATE && u(n);
            },
            [v, u, s]
        ),
        Y = i.useCallback(
            (e) => {
                var t;
                if (null != e && e.rowType !== b.aC.EMPTY_STATE) u(e), s(''), null === (t = P.current) || void 0 === t || t.focus();
            },
            [u, s]
        ),
        J = i.useMemo(() => Object.keys(n), [n]),
        W = i.useMemo(() => L.some((e) => !e.disabled) || v.some((e) => !e.disabled) || w.some((e) => !e.disabled) || C.some((e) => !e.disabled), [L, v, w, C]) || '' === r.trim();
    function K() {
        var e;
        U(!(null === (e = D.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && W);
    }
    return (
        i.useEffect(() => {
            K();
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: a()(E.searchBox, { [E.scrollSeparator]: F }),
                    children: [
                        null != k &&
                            (0, l.jsx)(o.FormTitle, {
                                tag: o.FormTitleTags.H5,
                                children: k
                            }),
                        (0, l.jsx)(g.Z, {
                            ref: P,
                            query: r,
                            onQueryChange: s,
                            selectedSection: _,
                            selectedRow: Q,
                            onSelectionChange: q,
                            onSelect: H,
                            tags: J.map((e) => n[e].display),
                            sections: $,
                            onRemoveTag: function (e) {
                                R(J[e]);
                            },
                            placeholder: M,
                            focusAfterReady: B,
                            isReady: I,
                            'aria-labelledby': f,
                            'aria-controls': y
                        }),
                        null != N
                            ? (0, l.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  children: N
                              })
                            : null
                    ]
                }),
                W
                    ? (0, l.jsx)(o.List, {
                          ref: D,
                          className: a()(E.roleMemberList, t),
                          sections: $,
                          renderRow: (e) => {
                              let t,
                                  i,
                                  { section: r, row: s } = e,
                                  d = null,
                                  u = !1,
                                  x = !1,
                                  g = !1,
                                  T = null != z && Object.keys(n).length >= z;
                              switch (r) {
                                  case b.m$.ROLES:
                                      (u = (i = S((d = v[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && T)),
                                          (g = _ === b.m$.ROLES && Q === s),
                                          (t = (0, l.jsxs)('div', {
                                              className: E.rowBody,
                                              children: [
                                                  (0, l.jsx)('div', {
                                                      className: a()(E.rowHeight, E.alignCenter),
                                                      children: (0, l.jsx)(o.ShieldUserIcon, {
                                                          size: 'custom',
                                                          color: d.colorString,
                                                          height: 20
                                                      })
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                      className: E.rowLabel,
                                                      children: [
                                                          (0, l.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              className: E.__invalid_rowTitle,
                                                              color: d.rowType === b.aC.EMPTY_STATE ? 'text-muted' : 'text-normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != A
                                                              ? (0, l.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: A
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case b.m$.MEMBERS:
                                      (u = (i = S((d = L[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && T)),
                                          (g = _ === b.m$.MEMBERS && Q === s),
                                          (t = (0, l.jsxs)('div', {
                                              className: E.rowBody,
                                              children: [
                                                  (0, l.jsx)(o.Avatar, {
                                                      src: d.avatarURL,
                                                      size: o.AvatarSizes.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, l.jsx)(o.Text, {
                                                      className: E.rowLabel,
                                                      variant: 'text-sm/normal',
                                                      children: d.name
                                                  }),
                                                  null != d.nickname
                                                      ? (0, l.jsx)(o.Text, {
                                                            color: 'text-muted',
                                                            className: E.rowLabelSubText,
                                                            variant: 'text-sm/normal',
                                                            'aria-hidden': !0,
                                                            children: d.username
                                                        })
                                                      : null,
                                                  d.bot && (0, l.jsx)(c.Z, { verified: d.verifiedBot })
                                              ]
                                          }));
                                      break;
                                  case b.m$.USERS:
                                      (u = (i = S((d = w[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && T)),
                                          (g = _ === b.m$.USERS && Q === s),
                                          (t = (0, l.jsxs)('div', {
                                              className: E.rowBody,
                                              children: [
                                                  (0, l.jsx)(o.Avatar, {
                                                      src: d.avatarURL,
                                                      size: o.AvatarSizes.SIZE_24,
                                                      'aria-label': ''
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                      className: E.rowLabel,
                                                      children: [
                                                          (0, l.jsx)(o.Text, {
                                                              variant: 'text-sm/normal',
                                                              children: d.name
                                                          }),
                                                          d.disabled && null != A
                                                              ? (0, l.jsx)(o.Text, {
                                                                    color: 'header-secondary',
                                                                    variant: 'text-xs/normal',
                                                                    children: A
                                                                })
                                                              : null
                                                      ]
                                                  })
                                              ]
                                          }));
                                      break;
                                  case b.m$.GUILDS:
                                      (u = (i = S((d = C[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && T)),
                                          (g = _ === b.m$.GUILDS && Q === s),
                                          (t = (0, l.jsxs)('div', {
                                              className: E.rowBody,
                                              children: [
                                                  (0, l.jsx)(m.Z, {
                                                      guild: d.guild,
                                                      active: !0,
                                                      size: m.Z.Sizes.SMALLER
                                                  }),
                                                  (0, l.jsx)('div', {
                                                      className: E.rowLabel,
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
                                        p,
                                        {
                                            id: 'user-row-'.concat(s),
                                            rowLabel: O ? null : h.zB(d.rowType),
                                            checked: u,
                                            disabled: x,
                                            onSelect: () => Y(d),
                                            showCheckbox: d.rowType !== b.aC.EMPTY_STATE,
                                            onMouseEnter: () => q(r, s, !1),
                                            selected: g,
                                            'aria-posinset': s + 1,
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
                                  case b.m$.ROLES:
                                      return j(T.intl.string(T.t.LPJmLy));
                                  case b.m$.MEMBERS:
                                      return j(T.intl.string(T.t['9Oq93t']));
                                  case b.m$.USERS:
                                      return j(T.intl.string(T.t.nqDUBQ));
                                  case b.m$.GUILDS:
                                      return j(T.intl.string(T.t['7hB4kp']));
                              }
                          },
                          sectionHeight: 32,
                          onScroll: K,
                          role: void 0,
                          innerRole: 'listbox',
                          innerId: y,
                          innerAriaMultiselectable: !0,
                          innerAriaOrientation: 'vertical'
                      })
                    : (0, l.jsxs)(d.Z, {
                          className: t,
                          align: d.Z.Align.CENTER,
                          justify: d.Z.Justify.CENTER,
                          direction: d.Z.Direction.VERTICAL,
                          children: [
                              (0, l.jsx)(x.Z, { className: E.noResultIcon }),
                              (0, l.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: Z(r)
                              })
                          ]
                      })
            ]
        })
    );
}
