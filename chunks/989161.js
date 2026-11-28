n.d(t, {
    Ay: () => nI,
    v7: () => ng,
    uW: () => nC,
    Wh: () => nE,
    ck: () => ny,
    ml: () => np,
    MD: () => nA,
    Sk: () => nS,
    NO: () => nh,
    Vu: () => nd,
    C: () => nm,
    Zx: () => nc,
    L0: () => nx,
    N_: () => nf,
});
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(143236),
    o = n(284009),
    u = n.n(o),
    c = n(462180),
    d = n(607399),
    h = n(136722),
    m = n(855986),
    f = n(192308),
    p = n(559106),
    g = n(281595),
    x = n(465532),
    E = n(765671),
    y = n(775602),
    S = n(793574),
    A = n(688810),
    C = n(177640),
    I = n(989837),
    b = n(289873),
    v = n(268218),
    N = n(750506),
    j = n(60809),
    T = n(792996),
    k = n(836555);
let _ = { width: 500, height: j.$V },
    O = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e(609019),
                n.e(237427),
                n.e(521332),
                n.e(896691),
                n.e(779367),
                n.e(992956),
                n.e(428643),
                n.e(630290),
                n.e(189423),
                n.e(49742),
                n.e(876400),
                n.e(24312),
                n.e(622936),
                n.e(216947),
                n.e(172727),
                n.e(460582),
                n.e(458098),
                n.e(826744),
                n.e(507528),
                n.e(834552),
                n.e(993103),
                n.e(508702),
                n.e(397270),
                n.e(879315),
                n.e(37085),
                n.e(890027),
                n.e(27773),
                n.e(571210),
                n.e(349460),
                n.e(88342),
                n.e(936320),
                n.e(132191),
                n.e(311802),
                n.e(698965),
                n.e(37977),
                n.e(538887),
                n.e(870663),
                n.e(437065),
                n.e(335395),
                n.e(636373),
                n.e(235313),
                n.e(230664),
                n.e(655708),
                n.e(454625),
                n.e(918024),
                n.e(408362),
                n.e(371133),
                n.e(715038),
                n.e(252229),
                n.e(165362),
                n.e(522261),
                n.e(678195),
                n.e(583518),
                n.e(341701),
                n.e(774021),
                n.e(639163),
                n.e(499118),
                n.e(336611),
                n.e(761764),
                n.e(241411),
                n.e(915086),
                n.e(68974),
                n.e(556385),
                n.e(291220),
                n.e(155304),
                n.e(135621),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, l.jsx)("div", { className: k.R4, style: _, children: (0, l.jsx)(b.y, {}) }),
    }),
    R = { height: j.$V },
    w = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: j.sK,
            children: (0, l.jsx)(N.nE, {
                className: k.T8,
                targetRef: t,
                position: "top",
                align: n ?? "right",
                spacing: 24,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: k.V6,
                        role: "dialog",
                        style: R,
                        "aria-label": T.intl.string(T.t["3CNGLK"]),
                        children: t && (0, l.jsx)(O, { ...i }),
                    });
                },
            }),
        });
    });
var M = n(861382),
    L = n(435558),
    P = n.n(L),
    D = n(537652),
    U = n(155718),
    V = n(149468),
    F = n(927659),
    W = n(579940),
    B = n(962125),
    G = n(915089),
    K = n(850992),
    H = n(887695),
    z = n(286509),
    q = n(721768),
    $ = n(842209),
    J = n(210978),
    Z = n(392054),
    Q = n(168186),
    X = n(866665),
    Y = n(939249),
    ee = n(318845),
    et = n(664929),
    en = n(934305);
let el = [16, 8, 8, 8];
function ei(e) {
    let {
            className: t,
            channel: n,
            sections: r,
            activeCategoryIndex: a,
            filteredSectionId: o,
            onSectionClick: u,
            applicationCommandListRef: c,
        } = e,
        d = i.useRef(null),
        h = i.useCallback(
            (e, t) => {
                let n = 8;
                return (r[t + 1]?.type === Z.Hf.BUILT_IN && (n += 8), 32 + n);
            },
            [r],
        ),
        m = i.useCallback((e, t) => (t ? 8 * (r[e + 1]?.type !== Z.Hf.BUILT_IN) : 8 * (0 !== e)), [r]),
        f = i.useCallback(
            (e, t) => {
                let i = r[t];
                if (null == i) return;
                let s = (0, et.Rg)(i),
                    c = 4 * (i.type === Z.Hf.BUILT_IN),
                    d = 32 - 2 * c,
                    h = (0, l.jsx)(s, {
                        channel: n,
                        section: i,
                        isSelected: null != o ? i.id === o : a === t,
                        padding: c,
                        width: d,
                        height: d,
                        selectable: !0,
                    }),
                    m = i.type !== Z.Hf.BUILT_IN && t < r.length - 1 && r[t + 1].type === Z.Hf.BUILT_IN;
                return (0, l.jsxs)(
                    "div",
                    {
                        className: en.uW,
                        children: [
                            (0, l.jsx)(X.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, l.jsx)(Y.D, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        u(i);
                                    },
                                    children: h,
                                }),
                            }),
                            m ? (0, l.jsx)("hr", { className: en.zQ }) : null,
                        ],
                    },
                    i.id,
                );
            },
            [a, n, u, r, o],
        );
    return 0 === r.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(t, en.iE),
              children: (0, l.jsx)(ee.A, {
                  categoryListRef: d,
                  expressionsListRef: c,
                  store: K.LS,
                  categories: r,
                  className: en.p_,
                  renderCategoryListItem: f,
                  rowCount: r.length,
                  categoryHeight: h,
                  listPadding: el,
                  getScrollOffsetForIndex: m,
              }),
          });
}
var er = n(524007),
    es = n(73510),
    ea = n(652215),
    eo = n(643904);
let eu = [8, 8, 0, 8],
    ec = P().debounce(() => {
        (0, V.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300);
function ed(e) {
    let { channel: t, canOnlyUseTextCommands: n, ref: r } = e,
        a = i.useRef(!1),
        o = i.useRef(0),
        [u, c] = i.useState(0),
        d = i.useRef(null),
        [h, m] = i.useState(!1),
        f = K.LS.useStore((e) => e.activeCategoryIndex);
    i.useEffect(() => {
        (0, V.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
    }, []);
    let {
            sectionDescriptors: p,
            activeSections: g,
            commandsByActiveSection: x,
            hasMoreAfter: E,
            commands: y,
            filteredSectionId: S,
            scrollDown: A,
            filterSection: C,
        } = $.cu({
            context: { channel: t, type: "channel" },
            filters: { commandTypes: [U.kc.CHAT], builtIns: n ? J.n.ONLY_TEXT : J.n.ALLOW, applicationCommands: !n },
            options: { placeholderCount: 7, limit: 10, includeFrecency: !0 },
            allowFetch: !0,
        }),
        I = (0, H.Fk)({
            activeCategoryIndex: f,
            isScrolling: a,
            listRef: d,
            onActiveCategoryIndexChange: (e) => {
                let t = g[e];
                if (null != t) {
                    let e = p.findIndex((e) => e.id === t.id);
                    K.LS.setActiveCategoryIndex(e);
                }
            },
            scrollOffset: 20,
            searchQuery: "",
        });
    function b(e) {
        let t = g.length,
            n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!E;
        (E && e + 420 > 48 * t + 56 * n - 512 && A(), I(e), ec(), (o.current = e));
    }
    let v = i.useRef(b);
    (i.useEffect(() => {
        v.current = b;
    }),
        i.useEffect(() => {
            v.current(o.current);
        }, [y]));
    let N = i.useCallback((e) => (e !== g.length - 1 || E ? 16 : 0), [g.length, E]),
        j = x.map((e) => e.data.length);
    (i.useEffect(() => {
        null != d.current && h && null != u && d.current.scrollRowIntoView(u);
    }, [h, u]),
        i.useLayoutEffect(() => {
            null != S && d.current?.scrollToSectionTop(0);
        }, [y, S]));
    let k = i.useCallback(
            (e) => {
                e.id === S || e.id === es.Ik.FRECENCY ? (C(null), d.current?.scrollToSectionTop(0)) : C(e.id);
            },
            [C, S],
        ),
        _ = i.useCallback(
            (e, n, l) => {
                q.Gf({ channelId: t.id, command: e, section: n, location: Z.Oh.DISCOVERY, triggerSection: l });
            },
            [t.id],
        );
    i.useImperativeHandle(
        r,
        () => ({
            onTabOrEnter: (e) => {
                if (null == u) return !e && (c(0), !0);
                if (null == u) return !1;
                let t = 0,
                    n = 0;
                for (let e of x)
                    if (((t = n), u < (n += e.data.length))) {
                        let n = e.data[u - t],
                            l = p.find((e) => e.id === n.applicationId);
                        _(n, l, (0, Q.$S)(e.section));
                        break;
                    }
                return !0;
            },
            onMoveSelection: (e) => {
                if (0 === y.length) return !0;
                let t = 7 * !!E,
                    n = y.length + t,
                    l = null == u ? 0 : u + e;
                return (l >= n ? (l = n - 1) : l < 0 && (l = 0), c(l), m(!0), !0);
            },
        }),
        [y.length, x, E, p, _, u],
    );
    let O = i.useCallback(
            (e) => {
                let n = g[e];
                if (null == n) return null;
                let i = (0, et.Rg)(n),
                    r = (0, l.jsx)(i, { channel: t, section: n, width: 16, height: 16, padding: 0 });
                return (0, l.jsx)(z.A, { className: eo.Km, icon: r, children: n.name }, e);
            },
            [t, g],
        ),
        R = i.useCallback(
            (e, t) => {
                let n = e === g.length - 1,
                    i = g[e],
                    { data: r } = x[e];
                return (0, l.jsxs)(
                    "ul",
                    {
                        role: "group",
                        "aria-label": i.name,
                        className: s()(eo.Wy, { [eo.YD]: n }),
                        children: [
                            t,
                            0 === r.length &&
                                (0, l.jsx)(D.A, {
                                    message: T.intl.format(T.t.WoQXT6, { applicationName: i.name }),
                                    className: eo.qK,
                                }),
                        ],
                    },
                    e,
                );
            },
            [g, x],
        ),
        w = i.useCallback(
            (e, n) => {
                let i = x[n.sectionIndex],
                    r = i.data[n.sectionRowIndex],
                    s = `${i.section.id}:${r?.id ?? e}`;
                if (
                    null == r ||
                    (i.section.id !== r.applicationId && i.section.id !== es.Ik.FRECENCY) ||
                    r.inputType === Z.y$.PLACEHOLDER
                )
                    return (0, l.jsx)(er.A, {}, s);
                let a = p.find((e) => e.id === r.applicationId);
                return (0, l.jsx)(
                    F.Ay.NewCommand,
                    {
                        index: e,
                        command: r,
                        channel: t,
                        className: eo.D5,
                        selected: u === e,
                        showImage: i.section.id !== r.applicationId,
                        section: a,
                        onClick: () => _(r, a, (0, Q.$S)(i.section)),
                        onHover: () => {
                            (c(null), m(!1));
                        },
                    },
                    s,
                );
            },
            [t, x, _, p, u],
        ),
        M = (0, G.GV)();
    return (
        (0, W.gf)(M, !0, (0, F.aI)(u)),
        i.useEffect(
            () => () => {
                (0, W.nQ)();
            },
            [],
        ),
        (0, l.jsxs)(F.Ay, {
            id: M,
            className: eo.x9,
            innerClassName: eo.iE,
            onMouseDown: eh,
            children: [
                (0, l.jsx)(ei, {
                    className: eo.H$,
                    channel: t,
                    sections: p,
                    filteredSectionId: S,
                    activeCategoryIndex: f,
                    onSectionClick: k,
                    applicationCommandListRef: d,
                }),
                (0, l.jsx)(B.A, {
                    role: "listbox",
                    className: eo.p_,
                    listPadding: eu,
                    onScroll: b,
                    renderRow: w,
                    renderSection: R,
                    renderSectionHeader: O,
                    rowCount: g.length,
                    rowCountBySection: j,
                    rowHeight: 56,
                    sectionHeaderHeight: 32,
                    sectionMarginBottom: N,
                    ref: d,
                    stickyHeaders: !0,
                }),
            ],
        })
    );
}
function eh(e) {
    e.preventDefault();
}
var em = n(164636),
    ef = n(152210),
    ep = n(31498),
    eg = n(598071),
    ex = n(151271),
    eE = n(759521),
    ey = n(256265);
n(336807);
var eS = n(857071),
    eA = n(135621),
    eC = n(105330),
    eI = n(46653),
    eb = n(559908),
    ev = n(620141),
    eN = n(224964),
    ej = n(31408),
    eT = n(77183);
function ek(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        r = i.useRef(n),
        s = (0, eC.l)({ editorHeight: t }),
        a = (0, eN.A)(),
        o = (0, m.bG)([eb.Ay, eI.default], () => eb.Ay.isComboing(eI.default.getId(), l)),
        u = s?.left ?? 0,
        c = (s?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== r.current && o && (a.fire(u, c, h ? { sprite: eT.dR } : null), (r.current = n));
        }, [n, o, u, c, h, a]),
        null
    );
}
function e_(e) {
    return (0, l.jsx)(ev.A, { confettiLocation: ej.k.CHAT_INPUT, children: (0, l.jsx)(ek, { ...e }) });
}
var eO = n(931664),
    eR = n(631576),
    ew = n(522602);
let eM = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    eL = /(\n|\t|\s)/g;
var eP = n(832628),
    eD = n(406704),
    eU = n(253932),
    eV = n(951260),
    eF = n(29080),
    eW = n(834730),
    eB = n(241326),
    eG = n(559647),
    eK = n(243185),
    eH = n(153440);
n(321073);
var ez = n(539451),
    eq = n(841817),
    e$ = n(518950),
    eJ = n(115921);
function eZ(e) {
    let { channelId: t, className: n, recording: r, reducedMotion: a, collapsing: o, onCollapseComplete: u } = e,
        c = i.useRef(null),
        d = i.useRef(r),
        h = i.useRef(a),
        m = i.useRef(o),
        f = i.useRef(u);
    return (
        i.useEffect(() => {
            ((d.current = r), (h.current = a), (m.current = o), (f.current = u));
        }, [o, u, r, a]),
        i.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let n = e.getContext("2d");
            if (null == n) return;
            let l = 0,
                i = !1,
                r = window.devicePixelRatio > 0 ? window.devicePixelRatio : 1,
                s = [],
                a = 0,
                o = 0,
                u = 0,
                p = 48,
                g = null,
                x = null,
                E = !1;
            function y(e) {
                return Math.max(0, Math.min(1, e / 255));
            }
            function S(e, t) {
                let n = new ez.A(t ? 0 : e);
                return (t && n.animateTo(e), { target: e, animator: n });
            }
            return (
                (l = requestAnimationFrame(function c(A) {
                    if (i) return;
                    let C = null == g ? 0 : Math.min(A - g, 100);
                    g = A;
                    let { clientWidth: I, clientHeight: b } = e;
                    ((e.width !== I * r || e.height !== b * r) && ((e.width = I * r), (e.height = b * r)),
                        n.clearRect(0, 0, e.width, e.height),
                        (n.fillStyle = window.getComputedStyle(e).color));
                    let v = (0, eq.yM)(t) ?? [];
                    (!(function (e, t) {
                        if (e === a) return;
                        let n = (s.length > 0 ? s : t.map((e) => S(y(e), !1))).slice(-e);
                        ((s = Array.from({ length: Math.max(0, e - n.length) }, () => S(0, !1)).concat(n)),
                            (a = e),
                            (u = s[s.length - 1]?.target ?? 0));
                    })(Math.max(1, Math.ceil(I / 6) + 2), v),
                        v.length < o && ((s = Array.from({ length: a }, () => S(0, !1))), (u = 0), (p = 48)),
                        (o = v.length));
                    let N = v.length > 0 ? y(v[v.length - 1]) : u;
                    if (d.current)
                        for (p += C; p >= 48;) {
                            var j;
                            ((u += (N - u) * 0.45),
                                (j = u),
                                s.push(S(j, !h.current)),
                                s.length > a && s.splice(0, s.length - a),
                                (p -= 48));
                        }
                    else p = Math.min(48, p + C);
                    let T = e.width,
                        k = e.height,
                        _ = 6 * r,
                        O = 2 * r,
                        R = +r,
                        w = 24 * r,
                        M = 2 * r,
                        L = d.current && !h.current ? _ * (1 - p / 48) : 0,
                        P = T - s.length * _ + L;
                    !m.current || h.current ? ((x = null), (E = !1)) : null == x && (x = A);
                    let D = null == x ? null : A - x;
                    (null != D && D >= 100 && !E && ((E = !0), f.current()), n.beginPath());
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            l = h.current ? t.target : Math.max(0, t.animator.getCurrentValue()),
                            i = s.length > 1 ? (e / (s.length - 1)) * 40 : 0,
                            r = null == D ? 0 : Math.max(0, Math.min((D - i) / 60, 1)),
                            a = l * (1 - r * r) * (w - M) + M,
                            o = P + e * _,
                            u = (k - a) / 2;
                        n.roundRect(o, u, O, a, R);
                    }
                    (n.fill(), (l = requestAnimationFrame(c)));
                })),
                () => {
                    ((i = !0), cancelAnimationFrame(l));
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: c, className: s()(eJ.J, n), "aria-hidden": !0 })
    );
}
var eQ = n(113494),
    eX = n(782134),
    eY = n(527388),
    e0 = n(188567),
    e1 = n(587481),
    e2 = n(408822),
    e5 = n(698279),
    e3 = n(252433),
    e6 = n(495088);
function e8(e) {
    var t;
    let { playback: n, durationSecs: r, animateWaveformEntrance: a = !1 } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, h] = i.useState(!1),
        [m, f] = i.useState(!1),
        [p, g] = i.useState(0),
        [x, E] = i.useState(r);
    (i.useEffect(() => {
        if (!u) return;
        let e = 0;
        return (
            (e = requestAnimationFrame(function t() {
                let n = o.current;
                null != n && (g(n.currentTime), (e = requestAnimationFrame(t)));
            })),
            () => cancelAnimationFrame(e)
        );
    }, [o, u, g]),
        (t = n.src),
        i.useEffect(() => {
            if (u)
                return (
                    e0._.dispatch(ea.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: t }),
                    e0._.subscribe(ea.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e0._.unsubscribe(ea.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: n } = e;
                n !== t && c(!1);
            }
        }, [t, u, c]));
    let y = i.useCallback(() => {
            (h(!0), c((e) => !e));
        }, []),
        S = i.useCallback(
            (e) => {
                let t = o.current;
                if (null == t) return;
                let n = e * x;
                ((t.currentTime = n), g(n), h(!0));
            },
            [x],
        ),
        A = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            Number.isFinite(t) && t > 0 && E(t);
        }, []),
        C = i.useCallback(() => {
            let e = o.current;
            (null != e && (e.currentTime = 0), g(0), c(!1), h(!1));
        }, []),
        I = i.useCallback(() => {
            (f(!1), p >= x && C());
        }, [p, x, C]),
        b = d ? Math.max(0, Math.ceil(x - p)) : Math.ceil(x),
        v = u ? eQ.PauseIcon : eX.PlayIcon,
        N = u ? T.intl.string(T.t["3XohGn"]) : T.intl.string(T.t.AlHqHT),
        j = u ? T.intl.string(T.t.ZcgDJX) : T.intl.string(T.t.RscU7I);
    return (0, l.jsxs)("div", {
        className: e3._W,
        children: [
            (0, l.jsx)(X.m, {
                text: j,
                children: (0, l.jsx)("div", {
                    className: s()(e5.VQ, e6.UD),
                    children: (0, l.jsx)(eK.A, { className: e6.x6, onClick: y, isActive: u, icon: v, "aria-label": N }),
                }),
            }),
            (0, l.jsx)(e2.A, {
                className: e3.ou,
                waveform: n.waveform,
                currentTime: p,
                duration: x,
                playing: u,
                played: d,
                fluid: !0,
                neutralPlaybackColors: !0,
                animateOnMount: a,
                onDrag: S,
                onDragStart: () => f(!0),
                onDragEnd: I,
            }),
            (0, l.jsx)("div", {
                className: e3.RE,
                children: (0, l.jsx)(eW.E, {
                    variant: "body-sm/normal",
                    className: e3.O1,
                    tabularNumbers: !0,
                    children: (0, eH.rB)(b),
                }),
            }),
            (0, l.jsx)(eY.A, {
                ref: o,
                className: e3.Zn,
                controls: !1,
                preload: "metadata",
                onEnded: C,
                onLoadedMetadata: A,
                onError: () => c(!1),
                volume: (0, e1.v1)(),
                playing: u && !m,
                children: (0, l.jsx)("source", { src: n.src }),
            }),
        ],
    });
}
var e4 = n(709372),
    e7 = n(984680);
let e9 = i.memo(function (e) {
    var t;
    let { channelId: n } = e,
        r = i.useRef(null);
    i.useEffect(() => {
        r.current?.focus();
    }, []);
    let a = (0, e4.om)(n),
        o = a?.phase === "recording",
        u = a?.phase === "recorded";
    i.useEffect(() => {
        if (!o) return;
        let e = document.activeElement;
        (null == e || e === document.body || e === r.current) && r.current?.focus();
    }, [o]);
    let c = (function (e) {
            let [t, n] = i.useState(() => Date.now());
            return (i.useEffect(() => {
                if (null == e) return;
                let t = window.setInterval(() => n(Date.now()), 250);
                return () => window.clearInterval(t);
            }, [e]),
            null == e)
                ? 0
                : Math.max(0, Math.floor((t - e) / 1e3));
        })(o ? a.startTimeMillis : void 0),
        d = (0, m.bG)([y.Ay], () => y.Ay.useReducedMotion),
        h = (function (e, t) {
            let [n, l] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if ("none" === e) return;
                    let n = window.setInterval(() => l((e) => !e), t ? 1e3 : "approaching" === e ? 500 : 250);
                    return () => window.clearInterval(n);
                }, [e, t]),
                "none" !== e && n
            );
        })(o ? ((t = 1e3 * c) >= e$.Uu ? "imminent" : t >= e$.Y_ ? "approaching" : "none") : "none", d),
        f = u ? a?.recordedPlayback : void 0,
        [p, g] = i.useState(!1),
        [x, E] = i.useState(f),
        S = p && !d && null != f;
    i.useEffect(() => {
        u && p && (null == document.activeElement || document.activeElement === document.body) && r.current?.focus();
    }, [p, u]);
    let A = i.useCallback(() => {
            null != f && E(f);
        }, [f]),
        C = i.useCallback(() => {
            (0, eq.nM)(n) && g(!0);
        }, [n]),
        I = i.useCallback(() => {
            o ? (0, eq.$G)(n) : u && (0, eq.SC)(n);
        }, [n, u, o]),
        b = i.useCallback(
            (e) => {
                "Enter" !== e.key ||
                    e.repeat ||
                    e.shiftKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.nativeEvent.isComposing ||
                    (!o && !u) ||
                    (e.preventDefault(), e.stopPropagation(), I());
            },
            [I, u, o],
        );
    if (null == a) return null;
    let v = u ? Math.round(a.recordedDurationSecs ?? 0) : c,
        N = o || u,
        j = S ? x : f,
        k = S && null == j;
    return (0, l.jsxs)("div", {
        className: e7.M0,
        role: "group",
        "aria-label": T.intl.string(T.t.lwy6aX),
        children: [
            null != j
                ? (0, l.jsx)(e8, { playback: j, durationSecs: a.recordedDurationSecs ?? 0, animateWaveformEntrance: S })
                : (0, l.jsxs)("div", {
                      className: e7.Fg,
                      children: [
                          o
                              ? (0, l.jsx)(X.m, {
                                    text: T.intl.string(T.t.hHBkuG),
                                    children: (0, l.jsx)("div", {
                                        className: s()(e5.VQ, e6.UD),
                                        children: (0, l.jsx)(eK.A, {
                                            className: e6.x6,
                                            onClick: C,
                                            isActive: !1,
                                            icon: eF.StopIcon,
                                            "aria-label": T.intl.string(T.t["cmFRF+"]),
                                        }),
                                    }),
                                })
                              : null,
                          (0, l.jsx)(eZ, {
                              channelId: n,
                              className: e7.ou,
                              recording: o,
                              reducedMotion: d,
                              collapsing: k,
                              onCollapseComplete: A,
                          }),
                          (0, l.jsxs)("div", {
                              className: e7.RE,
                              children: [
                                  (0, l.jsx)("div", { className: s()(e7.Zz, { [e7.Py]: !o }), "aria-hidden": !0 }),
                                  (0, l.jsx)(eW.E, {
                                      variant: "body-sm/normal",
                                      className: s()(e7.O1, { [e7.w2]: h }),
                                      tabularNumbers: !0,
                                      children: (0, eH.rB)(v),
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, l.jsx)("div", { className: e7.yF, "aria-hidden": !0 }),
            (0, l.jsx)(X.m, {
                text: T.intl.string(T.t.oyYWHE),
                children: (0, l.jsx)("div", {
                    className: s()(e5.VQ, e6.UD),
                    children: (0, l.jsx)(eK.A, {
                        className: e6.x6,
                        onClick: () => (0, eq.eT)(n),
                        isActive: !1,
                        icon: eB.TrashIcon,
                        "aria-label": T.intl.string(T.t.RdK9sV),
                    }),
                }),
            }),
            (0, l.jsx)(X.m, {
                text: T.intl.string(T.t.TXNS7S),
                children: (0, l.jsx)("div", {
                    className: s()(e5.VQ, e6.UD),
                    onKeyDown: b,
                    children: (0, l.jsx)(eK.A, {
                        ref: r,
                        className: e7.jo,
                        childClassName: s()(e7.Jp, { [e7.Tq]: !N }),
                        onClick: N ? I : void 0,
                        disabled: !N,
                        noHover: !N,
                        isActive: !1,
                        "aria-label": T.intl.string(T.t["+8GStU"]),
                        children: (0, l.jsx)(eG.SendMessageIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: e7.AO,
                        }),
                    }),
                }),
            }),
        ],
    });
});
var te = n(696451),
    tt = n(576705),
    tn = n(309010),
    tl = n(638128),
    ti = n(287809),
    tr = n(821102),
    ts = n(129230),
    ta = n(234320),
    to = n(488926),
    tu = n(723702),
    tc = n(486319),
    td = n(355622),
    th = n(84046),
    tm = n(140735),
    tf = n(176781),
    tp = n(463930),
    tg = n(935063),
    tx = n(73392),
    tE = n(650019),
    ty = n(763754),
    tS = n(967144),
    tA = n(118517),
    tC = n(976860),
    tI = n(747926),
    tb = n(596344),
    tv = n(285796),
    tN = n(595347);
function tj(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Y.D, {
        className: tN.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(tv.CircleXIcon, { size: "md", color: "currentColor", className: tN.u }),
    });
}
var tT = n(558497);
let tk = "channel-reply-bar-a11y-description";
function t_(e) {
    let { channel: t, message: n, replyChainLength: r } = e,
        s = i.useRef(r);
    return (
        i.useEffect(() => {
            s.current = r;
        }),
        i.useEffect(() => {
            (0, V.zV)(ea.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, l.jsxs)(Y.D, {
            onClick: function () {
                ((0, tA.Jx)(t.id), (0, tI.Tv)(t, n, "Reply Chain Nudge"));
            },
            className: tT._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(eW.E, {
                    color: "text-default",
                    className: tT.Qq,
                    variant: "body-sm/normal",
                    children: T.intl.format(T.t.B3V0FM, { count: Math.min(10, r + 1) }),
                }),
                (0, l.jsx)(eW.E, {
                    color: "text-link",
                    className: tT.NG,
                    variant: "body-sm/semibold",
                    children: T.intl.string(T.t.rBIGBL),
                }),
            ],
        })
    );
}
function tO(e) {
    let t,
        n,
        { reply: r, chatInputType: a } = e,
        { channel: o, message: u, shouldMention: c, showMentionToggle: d, mediaMention: h } = r,
        {
            guildId: f,
            nick: p,
            colorString: g,
            colorStrings: x,
            colorRoleName: E,
            authorId: y,
            displayNameStyles: S,
        } = (0, ty.Ay)(u),
        A = (0, tS.gn)(f, y, x),
        C = (0, tx.a)({ displayNameStyles: S }),
        I = (0, tE.A)(h, u.attachments),
        b =
            ((t = o.id),
            (n = u.id),
            (0, m.bG)(
                [tb.A],
                () => {
                    let e = n;
                    for (let n = 0; n < 10; n++) {
                        let l = tb.A.getMessage(t, e);
                        if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                        e = l.messageReference.message_id;
                    }
                    return 10;
                },
                [t, n],
            )),
        v = (0, eD.n)(o, u),
        N = a.showThreadPromptOnReply && b >= 2 && v;
    return (0, l.jsx)("div", {
        className: tT.e1,
        children: (0, l.jsxs)("div", {
            className: tT.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tT.eU,
                    children: [
                        (0, l.jsx)(tm.A, { id: tk, children: T.intl.formatToPlainString(T.t.EpJL4E, { username: p }) }),
                        (0, l.jsx)(Y.D, {
                            onClick: function () {
                                return (0, tC.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(eW.E, {
                                color: "text-default",
                                className: s()(tT.Qq, tT.Fn),
                                variant: "body-sm/normal",
                                children: T.intl.format(T.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsx)(
                                            i.Fragment,
                                            {
                                                children:
                                                    I?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: tT.H8,
                                                              children: [
                                                                  I.isClip &&
                                                                      (0, l.jsx)(tf.ClipsIcon, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: tT.gS,
                                                                      }),
                                                                  (0, l.jsx)(eW.E, {
                                                                      variant: "body-sm/semibold",
                                                                      color: "text-default",
                                                                      className: tT.NV,
                                                                      children: I.title,
                                                                  }),
                                                                  (0, l.jsxs)(eW.E, {
                                                                      variant: "body-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", I.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(tp.g, {
                                                              className: tT.UU,
                                                              name: p,
                                                              colorString: g,
                                                              colorStrings: A,
                                                              roleName: E,
                                                              displayNameStylesFont: C,
                                                          }),
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: tT.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(X.m, {
                                                asContainer: !0,
                                                text: c ? T.intl.string(T.t.DH2o6R) : T.intl.string(T.t.utGGIY),
                                                children: (0, l.jsx)(Y.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        (e.stopPropagation(), (0, tA.vz)(o.id, !c));
                                                    },
                                                    children: (0, l.jsxs)(eW.E, {
                                                        variant: "body-sm/semibold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: tT.Z4,
                                                        children: [
                                                            (0, l.jsx)(tg.AtIcon, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": T.intl.string(T.t.P8tvKG),
                                                                className: tT.mM,
                                                            }),
                                                            c ? T.intl.string(T.t.p9jC2r) : T.intl.string(T.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: tT.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(tj, {
                                    onClick: function (e) {
                                        (e.stopPropagation(), (0, tA.Jx)(o.id));
                                    },
                                    "aria-label": T.intl.string(T.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                N && (0, l.jsx)(t_, { channel: o, message: u, replyChainLength: b }),
            ],
        }),
    });
}
var tR = n(202501),
    tw = n(148355),
    tM = n(218782);
let tL = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [r, s] = i.useState(null),
        a = (0, m.bG)([eO.A], () => eO.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != a && 0 !== a.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: tM.Tz,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: tM.dp,
                                  children: [
                                      (0, l.jsx)(Y.D, {
                                          onFocus: () => s(e.id),
                                          onBlur: () => s(null),
                                          className: tM.b,
                                          "aria-label": T.intl.formatToPlainString(T.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eR.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: tM.Nk,
                                              children: (0, l.jsx)(tv.CircleXIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tM.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(tw.A, {
                                          isInteracting: r === e.id,
                                          className: tM.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(tR.A, { className: tM.R }),
              ],
          })
        : null;
});
var tP = n(612394),
    tD = n(442433);
n(827669);
var tU = n(811559);
function tV(e) {
    let t,
        r,
        a,
        { className: o, activeCommand: u, activeOption: c, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tD.L3)(e, async () => {
                          let { default: e } = await n.e(715687).then(n.bind(n, 646938));
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: T.intl.string(T.t.oJ1Muw) });
                      });
            },
            [u?.rootCommand?.id],
        ),
        f = i.useCallback(() => {
            q.Gf({ channelId: h, command: null, section: null });
        }, [h]);
    if (null == u) return null;
    if (null != c) {
        let e = d[c.name].lastValidationResult;
        ((t = c.displayName), (r = c.displayDescription), (a = e?.success ? null : e?.error));
    } else ((t = `/${u.displayName}`), (r = u.displayDescription), (a = null));
    return (0, l.jsxs)("div", {
        className: s()(o, tU.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tU.iz,
                children: [
                    (0, l.jsx)(eW.E, {
                        variant: "body-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != a
                        ? (0, l.jsx)("span", { className: tU.z3, children: a })
                        : (0, l.jsx)("span", { className: tU.h_, children: r }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tU.o1,
                children: (0, l.jsx)(tj, { onClick: f, "aria-label": T.intl.string(T.t.cpT0Cq) }),
            }),
        ],
    });
}
var tF = n(73153),
    tW = n(734057);
let tB = new Set();
class tG extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        (this.waitFor(tW.A, te.Ay, tn.Ay, ti.default), null != e && (tB = new Set(e)));
    }
    hasId(e) {
        return tB.has(e);
    }
    getState() {
        return [...tB];
    }
}
let tK = new tG(tF.h, {});
function tH() {
    let e = tn.Ay.getChannelId();
    if (null == e) return;
    let t = tW.A.getChannel(e);
    null != t && t.isPrivate() && (tB.has(t.getRecipientId()) || (tB.add(t.getRecipientId()), tK.emitChange()));
}
function tz() {
    return (0, l.jsxs)("div", {
        className: tT.eU,
        children: [
            (0, l.jsx)(eW.E, {
                variant: "body-sm/medium",
                className: s()(tT.Qq, tT.Fn),
                children: T.intl.string(T.t["2UvR1E"]),
            }),
            (0, l.jsx)("div", {
                className: tT.o1,
                children: (0, l.jsx)(tj, { onClick: tH, "aria-label": T.intl.string(T.t.cpT0Cq) }),
            }),
        ],
    });
}
var tq = n(541188);
function t$(e) {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: tq.M,
        children: [
            (0, l.jsx)(eW.E, {
                variant: "body-xs/semibold",
                color: "text-strong",
                children: T.intl.string(T.t["4VDCG0"]),
            }),
            t
                ? (0, l.jsx)(eW.E, { variant: "body-xs/medium", className: tq.z, children: T.intl.string(T.t.qNorwt) })
                : (0, l.jsx)(eW.E, {
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: T.intl.string(T.t["260qZS"]),
                  }),
        ],
    });
}
var tJ = n(25201),
    tZ = n(926321),
    tQ = n(399482);
function tX(e) {
    var t, n;
    let { channelId: i } = e,
        r = (0, tJ.vR)(i);
    if (null == r) return null;
    let a = r.rolling,
        o =
            ((t = a),
            (n = r.results),
            t
                ? T.intl.string(T.t["x/FIRX"])
                : null == n
                  ? ""
                  : T.intl.formatToPlainString(T.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: s()(tQ.kL, { [tQ.Kd]: !r.dismissing }),
        children: (0, l.jsxs)("div", {
            className: tQ.Qs,
            children: [
                (0, l.jsx)(tZ.DiceIcon, { size: "md", className: s()({ [tQ.su]: a }) }),
                (0, l.jsx)(eW.E, { color: "text-default", variant: "body-sm/normal", children: o }),
            ],
        }),
    });
}
var tY = n(575293),
    t0 = n(536637),
    t1 = n.n(t0),
    t2 = n(31717),
    t5 = n(551640),
    t3 = n(970244),
    t6 = n(29621);
function t8(e) {
    let { channel: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: r } = n,
        s = i.useId();
    return (0, l.jsx)("div", {
        className: t6.e1,
        children: (0, l.jsx)("div", {
            className: t6.kL,
            children: (0, l.jsxs)("div", {
                className: t6.g3,
                children: [
                    (0, l.jsx)(Y.D, {
                        className: t6.a3,
                        "aria-describedby": s,
                        onClick: function () {
                            (0, t3.e0)({
                                channel: t,
                                defaultValue: t1()(r),
                                entryPoint: t5.t.COMPOSER_BAR,
                                isEditing: !0,
                            });
                        },
                        children: (0, l.jsx)(eW.E, {
                            color: "text-default",
                            className: t6.Qq,
                            variant: "body-sm/normal",
                            children: T.intl.formatToPlainString(T.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                        }),
                    }),
                    (0, l.jsx)(tm.A, { id: s, children: T.intl.string(T.t.SBcdAN) }),
                    (0, l.jsx)("div", {
                        className: t6.o1,
                        children: (0, l.jsx)(tj, {
                            onClick: function (e) {
                                (e.stopPropagation(), x.A.clearDraft(t.id, t2.C.ScheduledMessage));
                            },
                            "aria-label": T.intl.string(T.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function t4(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        r = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === r.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  r.length > 0 && (0, l.jsx)("div", { className: e6.Vq, children: r }),
                  n.length > 0 && (0, l.jsx)("div", { className: e6.MD, children: n }),
              ],
          });
}
var t7 = n(12764),
    t9 = n(102077),
    ne = n(246049),
    nt = n(135261),
    nn = n(339200),
    nl = n(265872),
    ni = n(375499),
    nr = n(201614),
    ns = n(307731),
    na = n(9287);
function no(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: r, channel: s } = e,
        a = t(),
        o = i.useRef(null);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: na.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: na.Wy,
                      children: (0, l.jsx)(nt.P, {
                          slateEditor: a,
                          options: r.markdown,
                          iconClassName: na.C7,
                          dividerClassName: na.us,
                      }),
                  }),
                  (0, l.jsx)(nl.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(nr.default, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: l, willClose: i } = e;
                                  (n({ emoji: l, willClose: i }), i && t());
                              },
                              pickerIntention:
                                  r.expressionPicker?.emojiIntention ?? ns.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: nl.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(ni.A, { ...e, ref: o, active: n, className: na.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var nu = n(263582);
function nc(e, t, r, s, a) {
    let [o, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, h, m, p, g) => {
                if (o) return;
                u(!0);
                let E = eO.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    y = ew.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !p && (0, ey.xz)(y, a)) {
                    (u(!1),
                        (0, f.mM)(async () => {
                            let { default: e } = await Promise.all([
                                n.e(686889),
                                n.e(56501),
                                n.e(587882),
                                n.e(560570),
                                n.e(896691),
                                n.e(779367),
                                n.e(992956),
                                n.e(428643),
                                n.e(630290),
                                n.e(189423),
                                n.e(77413),
                                n.e(521332),
                                n.e(267526),
                                n.e(669174),
                                n.e(967062),
                                n.e(377016),
                                n.e(17256),
                                n.e(374962),
                                n.e(592e3),
                                n.e(524434),
                                n.e(849162),
                                n.e(229511),
                                n.e(726399),
                                n.e(599660),
                                n.e(99965),
                                n.e(706073),
                                n.e(227512),
                                n.e(452880),
                                n.e(84663),
                                n.e(508702),
                                n.e(126437),
                                n.e(481647),
                                n.e(749248),
                                n.e(704434),
                                n.e(879315),
                                n.e(900361),
                                n.e(37085),
                                n.e(890027),
                                n.e(21921),
                                n.e(349460),
                                n.e(139970),
                                n.e(508371),
                                n.e(179049),
                                n.e(647177),
                                n.e(412743),
                                n.e(693832),
                                n.e(294857),
                                n.e(826240),
                                n.e(803332),
                                n.e(254506),
                                n.e(432209),
                                n.e(455924),
                                n.e(250478),
                                n.e(858337),
                                n.e(708692),
                                n.e(957506),
                                n.e(97210),
                                n.e(387933),
                                n.e(260218),
                                n.e(362422),
                                n.e(789573),
                                n.e(28852),
                                n.e(968763),
                                n.e(356296),
                                n.e(732272),
                                n.e(935948),
                                n.e(562168),
                                n.e(24922),
                                n.e(698547),
                                n.e(28456),
                                n.e(24889),
                                n.e(213924),
                                n.e(702813),
                                n.e(144989),
                                n.e(179745),
                                n.e(96274),
                                n.e(775934),
                                n.e(836150),
                                n.e(472789),
                                n.e(803191),
                                n.e(699011),
                                n.e(150200),
                                n.e(486155),
                                n.e(710014),
                                n.e(777848),
                                n.e(386861),
                                n.e(770961),
                                n.e(623685),
                                n.e(714573),
                                n.e(684688),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: a,
                                    attachments: y,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        }));
                    return;
                }
                e({
                    value: i,
                    uploads: y,
                    stickers: E,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: l } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != r.current;
                    (i &&
                        (a !== tn.Ay.getChannelId()
                            ? x.A.saveDraft(a, "", t.drafts.type)
                            : o && (r.current?.clearValue(), s.current?.hide())),
                        o && (u(!1), (0, ex.v8)(), l && r.current?.focus()));
                });
            },
            [r, s, e, o, t, a],
        );
    return {
        submitting: o,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                r?.current?.submit(e);
            },
            [r],
        ),
    };
}
function nd(e, t, n) {
    return i.useCallback(
        (l, i) => {
            if (i?.shiftKey === !0 || t === td.oU.CREATE_FORUM_POST || t === td.oU.CREATE_ANNOUNCEMENT_POST)
                n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? "klipy",
                    load_id: tr.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: l.url,
                    gif_id: l.id,
                };
                e(l.url, void 0, void 0, !0, void 0, t);
            }
            ((0, ex.v8)(), n.current?.focus());
        },
        [n, e, t],
    );
}
function nh(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            (null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, ex.v8)());
        },
        [e],
    );
}
function nm(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: r, chatInputType: s, submit: a } = e,
        { analyticsLocations: o } = (0, A.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (s === td.oU.CREATE_ANNOUNCEMENT_POST ||
                s === td.oU.CREATE_FORUM_POST ||
                (function (e, t, n, l) {
                    if (ew.A.getUploadCount(n, l) > 0) return !0;
                    let i = eO.A.getStickerPreview(n, l);
                    if (null != i && i.length > 0) return !0;
                    switch (e) {
                        case eP.D6.STICKER_PICKER:
                            return "" !== t.trim();
                        case eP.D6.AUTOCOMPLETE:
                            var r;
                            return (
                                (null == (r = t) ? [] : r.replace(eM, "").replace(eL, " ").trim().split(" ")).length > 1
                            );
                        case eP.D6.BUILT_IN_INTEGRATION:
                        default:
                            return !1;
                    }
                })(i, l, r, s.drafts.type)
                    ? ((0, tP.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != eO.A.getStickerPreview(r, s.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eR.$x)(r, e, s.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ex.v8)(),
                t.current?.focus());
        },
        [n, l, r, t, o, a, s],
    );
}
function nf(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, ex.r$)(e5.kx.EMOJI, e, n);
        }, [t, e, n]),
        r = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ex.r$)(e5.kx.GIF, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ex.r$)(e5.kx.STICKER, e, n);
        }, [t, e, n]);
    ((0, ta.Vo)({ event: ea.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, ta.Vo)({ event: ea.jej.TOGGLE_GIF_PICKER, handler: r }),
        (0, ta.Vo)({ event: ea.jej.TOGGLE_STICKER_PICKER, handler: s }));
}
function np(e, t, n) {
    let [l] = i.useState(() => new a.EventEmitter());
    return (
        i.useEffect(() => {
            l.emit("text-changed", t, n);
        }, [t, n, l]),
        {
            eventEmitter: l,
            handleEditorSelectionChanged: function (t) {
                null != e.current && l.emit("selection-changed", t);
            },
        }
    );
}
function ng() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nx(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nE(e, t) {
    return i.useMemo(
        () => ({
            current: {
                get element() {
                    return e.current;
                },
                focus: () => t.current?.focus(),
            },
        }),
        [e, t],
    );
}
function ny(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                (n(t ?? 0), e?.(t));
            },
            [e],
        ),
    };
}
function nS(e, t, n, l) {
    let i = e.getGuildId(),
        r = (0, m.bG)([eS.A], () => null != i && eS.A.isLurking(i), [i]),
        s = (0, m.bG)([te.Ay, ti.default], () => {
            let e = ti.default.getCurrentUser();
            return (null != i && null != e ? te.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)(
            [tt.A],
            () => {
                let i = e.isPrivate(),
                    r = tt.A.computePermissions(e),
                    a = h.zy(r, ea.xBc.CREATE_PUBLIC_THREADS) || h.zy(r, ea.xBc.CREATE_PRIVATE_THREADS),
                    o =
                        (!t.permissions?.requireCreateTherads || a) &&
                        (!t.permissions?.requireSendMessages || h.zy(r, ea.xBc.SEND_MESSAGES)),
                    u = o && h.zy(r, ea.xBc.ATTACH_FILES),
                    c = null != n,
                    d = (0, eD.UJ)(e);
                return {
                    disabled: l || s || (!i && !o) || d,
                    canAttachFiles: !0 === t.attachments && (i || s || u || c),
                    canCreateThreads: a,
                    canEveryoneSendMessages: to.MJ(ea.xBc.SEND_MESSAGES, e),
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, s],
        );
    return { isLurking: r, isPendingMember: s, ...a };
}
function nA(e, t, n) {
    let [l, r, s] = (0, ex.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        a = (0, m.bG)([I.A], () => I.A.shouldShowPopup() && I.A.activeViewType() === e && I.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, ex.v8)(e, n);
        },
        [e, n],
    );
    let o = i.useCallback(() => {
            null != l || a || t.current?.handleOuterClick();
        }, [l, a, t]),
        u = null == l || null == r || r !== e || s !== n;
    return { expressionPickerView: l, shouldHideExpressionPicker: u, handleOuterClick: o };
}
function nC(e, t) {
    return {
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, ex.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nI = i.memo(function (e) {
    let t,
        n,
        {
            textValue: r,
            richValue: a,
            className: o,
            innerClassName: c,
            editorClassName: h,
            id: f,
            required: x,
            disabled: b,
            placeholder: v,
            accessibilityLabel: N,
            channel: j,
            type: T,
            focused: k,
            error: _,
            renderAttachButton: O,
            renderApplicationCommandIcon: R,
            renderButtons: L,
            pendingReply: P,
            onChange: D,
            onResize: U,
            onBlur: V,
            onFocus: F,
            onKeyDown: W,
            onSubmit: B,
            promptToUpload: G,
            highlighted: K,
            canMentionRoles: H,
            canMentionChannels: z,
            maxCharacterCount: q,
            showRemainingCharsAfterCount: $,
            allowNewLines: J = !0,
            characterCountClassName: Z,
            "aria-describedby": Q,
            "aria-labelledby": X,
            setEditorRef: Y,
            autoCompletePosition: ee,
            children: et,
            disableThemedBackground: en = !1,
            emojiPickerCloseOnModalOuterClick: el,
            parentModalKey: ei,
            scheduledMessageDraft: er,
            showValueWhenDisabled: es = !1,
            ref: eo,
        } = e;
    u()(null != T, "chat input type must be set");
    let { analyticsLocations: eu } = (0, A.Ay)(S.A.CHANNEL_TEXT_AREA),
        ec = nx(eo),
        eh = i.useRef(null),
        ey = i.useRef(null),
        eS = i.useRef(null),
        eC = nE(ec, eS),
        eI = i.useRef(null),
        eb = i.useRef(null),
        ev = i.useCallback(() => eS.current?.getSlateEditor() ?? null, []);
    Y?.(eS.current);
    let eN = (0, C.A)(j),
        ej = (0, eV.n)("ChannelTextAreaContainer"),
        eT = (0, m.cf)([y.Ay], () => ({
            expressionPickerFormat: y.Ay.expressionPickerFormat,
            condensePickerWhenNarrow: y.Ay.condensePickerWhenNarrow,
        })),
        ek = ej ? eT.expressionPickerFormat : y.IG.FLEXIBLE,
        eO = !ej || eT.condensePickerWhenNarrow,
        [eR, ew] = i.useState(!eN);
    (0, E.i4)(ec, (e) => {
        let { width: t } = e;
        return ew(!eN && (null == t || t > 450));
    });
    let eM = ek === y.IG.HIDDEN,
        eL = ek === y.IG.CONDENSED || (ek === y.IG.FLEXIBLE && eO && !eR),
        { activeCommand: eP, activeCommandSection: eD } = (0, m.cf)([M.A], () => ({
            activeCommand: T.commands?.enabled ? M.A.getActiveCommand(j.id) : null,
            activeCommandSection: T.commands?.enabled ? M.A.getActiveCommandSection(j.id) : null,
        })),
        {
            isLurking: eF,
            isPendingMember: eW,
            disabled: eB,
            canAttachFiles: eG,
            canCreateThreads: eK,
            canEveryoneSendMessages: eH,
        } = nS(j, T, eP, b),
        ez = T.toolbarType === td.O1.STATIC,
        e$ = !eU.D_.useSetting() && !(0, tu.Ct)() && null != window.ResizeObserver,
        eJ = !e$ || !T.commands?.enabled || !k || "/" !== r,
        eZ = (0, eA.A)(),
        { fontSize: eQ } = (0, m.cf)([y.Ay], () => ({ fontSize: y.Ay.fontSize })),
        eX = (0, m.bG)([tl.A], () => tl.A.isEnabled());
    nf(T, eB, j.id);
    let { eventEmitter: eY, handleEditorSelectionChanged: e1 } = np(eS, r, a),
        e2 = i.useRef(r);
    e2.current = r;
    let e5 = i.useCallback(
            (e, t, n) => {
                ("/" === t && "" === e2.current && T.commands?.enabled && eY.emit("command-sentinel-typed"),
                    D?.(e, t, n));
            },
            [D, T.commands?.enabled, eY],
        ),
        { submitting: e3, submit: e8, handleSubmit: e7 } = nc(B, T, eS, eb, j.id),
        { autocompleteRef: tt, handleMaybeShowAutocomplete: tn, handleHideAutocomplete: tr } = ng(),
        ta = nd(e8, T, eS),
        to = nh(eS),
        tm = nm({ editorRef: eS, disabled: eB, textValue: r, channelId: j.id, chatInputType: T, submit: B }),
        tf = i.useCallback(
            (e, t, n) => {
                let l = eS.current;
                (null != e &&
                    null != l &&
                    (ts.default.track(ea.HAw.SOUNDMOJI_SELECT, {
                        channel_id: j.id,
                        guild_id: j.guild_id,
                        sound_guild_id: e.guildId,
                        sound_id: e.soundId,
                        source: t,
                    }),
                    l.insertSound(e)),
                    n && (0, ex.v8)(),
                    l?.focus());
            },
            [eS, j.id, j.guild_id],
        ),
        tp = i.useCallback(() => eb?.current?.hide(), []),
        { editorHeight: tg, handleResize: tx } = ny(U),
        {
            handleTab: tE,
            handleEnter: ty,
            handleSpace: tS,
            handleMoveSelection: tA,
        } = ((t = i.useCallback(
            () => !!(!eJ && eh.current?.onTabOrEnter(!1)) || tt.current?.onTabOrEnter(!1) || !1,
            [eJ, eh, tt],
        )),
        (n = i.useCallback(
            () => !!(!eJ && eh.current?.onTabOrEnter(!0)) || tt.current?.onTabOrEnter(!0) || !1,
            [eJ, eh, tt],
        )),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => tt.current?.onSpace() || !1, [tt]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!eJ && eh.current?.onMoveSelection(e)) || tt.current?.onMoveSelection(e) || !1,
                [eJ, eh, tt],
            ),
        }),
        { expressionPickerView: tC, shouldHideExpressionPicker: tI, handleOuterClick: tb } = nA(T, eS, j.id),
        { selectedAutocompleteInputType: tv, selectedAutocompleteInputError: tN } = (function (e, t) {
            let [n, l] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                r = i.useCallback(() => {
                    let e,
                        n = t.current?.getSlateEditor();
                    (null != n && (e = nn.VW.getSelectedParentOfType(n, ep.mk)?.[0]),
                        l({
                            selectedAutocompleteInputType: e?.type ?? null,
                            selectedAutocompleteInputError: e?.error ?? !1,
                        }));
                }, [t]);
            return (
                i.useEffect(
                    () => (
                        e.on("selection-changed", r),
                        e.on("submit-failure", r),
                        r(),
                        () => {
                            (e.off("selection-changed", r), e.on("submit-failure", r));
                        }
                    ),
                    [r, e],
                ),
                n
            );
        })(eY, eS),
        { handleAutocompleteVisibilityChange: tj } = nC(T, j.id),
        tT = (function (e) {
            let { type: t, channelId: n } = e;
            return (0, em.bG)(
                [I.A],
                () => {
                    let e = I.A.activeViewType();
                    return null != e && e === t && I.A.activeChannelId() === n && I.A.shouldShowPopup();
                },
                [t, n],
            );
        })({ type: T, channelId: j.id }),
        t_ = i.useCallback(() => {
            eY.emit("submit-failure");
        }, [eY]);
    (0, tc.R)(eY, j.guild_id, j.id);
    let tR = null != P,
        tw = (eB && !((eF || eW) && eH)) || (e3 && T.submit?.useDisabledStylesOnSubmit),
        tM = null;
    null != eP ? (tM = R?.(eP, eD, e6.g$)) : (!eB || eK) && (tM = O?.(tR, e6.g$));
    let { isVisible: tP, showsUpsell: tD } = (0, nu.A)({
            type: T,
            textValue: r,
            maxCharacterCount: q,
            showRemainingCharsAfterCount: $,
        }),
        tU = e$ && null != a && !eB && T.showCharacterCount && null == eP,
        tF = e$ && !__OVERLAY__ && null != a && null == eP && T.toolbarType !== td.O1.NONE && !eB,
        tW = (function (e) {
            let {
                    channel: t,
                    type: n,
                    activeCommand: r,
                    pendingReply: s,
                    scheduledMessageDraft: a,
                    selectedAutocompleteInputType: o,
                    selectedAutocompleteInputError: u,
                } = e,
                { activeCommandOption: c, activeCommandOptionStates: d } = (0, m.cf)([M.A], () => ({
                    activeCommandOption: M.A.getActiveOption(t.id),
                    activeCommandOptionStates: M.A.getOptionStates(t.id),
                })),
                h = (0, m.bG)([te.Ay, ti.default, tK], () => {
                    let e = ti.default.getCurrentUser();
                    if (null == e || !e.isStaff() || !t.isDM()) return !1;
                    let n = ti.default.getUser(t.getRecipientId());
                    if (!n?.isStaff()) return !1;
                    let l = te.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                    return l ? !tK.hasId(n.id) && l : (tB.delete(n.id) && tK.emitChange(), !1);
                }),
                f = (0, tJ.Ay)((e) => e.channelId === t.id);
            return i.useMemo(() => {
                let e = [],
                    i = [];
                return (
                    null != t.guild_id &&
                        n === td.oU.NORMAL &&
                        i.push((0, l.jsx)(tY.A, { guildId: t.guild_id, channel: t, className: e6.UW })),
                    null != r &&
                        e.push(
                            (0, l.jsx)(tV, {
                                activeCommand: r,
                                activeOption: c ?? null,
                                optionStates: d,
                                channelId: t.id,
                            }),
                        ),
                    null != s && e.push((0, l.jsx)(tO, { reply: s, chatInputType: n })),
                    h && e.push((0, l.jsx)(tz, {})),
                    null != a && e.push((0, l.jsx)(t8, { channel: t, scheduledMessageDraft: a })),
                    "timestampMentionInput" === o && i.push((0, l.jsx)(t$, { error: u ?? !1 })),
                    f && e.push((0, l.jsx)(tX, { channelId: t.id })),
                    { stacked: e, floating: i }
                );
            }, [r, c, d, t, f, s, h, n, a, o, u]);
        })({
            channel: j,
            type: T,
            activeCommand: eP,
            pendingReply: P,
            scheduledMessageDraft: er,
            selectedAutocompleteInputType: tv,
            selectedAutocompleteInputError: tN,
        }),
        tG = 0 === r.trim().length,
        tH = null != (0, e4.om)(j.id);
    i.useEffect(
        () => () => {
            let e = (0, e4.Mk)(j.id);
            e?.phase === "recording" ? (0, eq.yx)(j.id) : e?.phase === "requesting" && (0, eq.eT)(j.id);
        },
        [j.id],
    );
    let tq = i.useRef(tH);
    i.useEffect(() => {
        (tq.current && !tH && eS.current?.focus(), (tq.current = tH));
    }, [tH]);
    let tZ = null != P ? [Q, tk].filter(Boolean).join(" ") : Q,
        tQ = T.layout === td.wt.INLINE,
        t0 = T.layout === td.wt.FLUSH,
        t1 = (0, l.jsx)("div", { ref: ey, className: e6.BW }),
        t2 = tT ? (0, l.jsx)(w, { align: "right", positionTargetRef: ey, channel: j }) : null,
        t5 =
            null != L
                ? L()
                : (0, l.jsx)(t7.A, {
                      type: T,
                      disabled: eB,
                      channel: j,
                      handleSubmit: e7,
                      isEmpty: tG,
                      showAllButtons: !eL && !eM,
                      expressionButtonsHidden: eM,
                  }),
        t3 = tU
            ? (0, l.jsx)(ne.A, {
                  type: T,
                  textValue: r,
                  className: Z,
                  maxCharacterCount: q,
                  showRemainingCharsAfterCount: $,
              })
            : null;
    return (
        i.useEffect(() => {
            k && e0._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: j.id });
        }, [k, j.id]),
        (0, l.jsx)(eg.Sv, {
            value: eY,
            children: (0, l.jsxs)(A.f5, {
                value: eu,
                children: [
                    tF && ez
                        ? (0, l.jsx)(no, { getSlateEditor: ev, onInsertEmoji: to, type: T, channel: j })
                        : tF
                          ? (0, l.jsx)(nt.A, { ref: eb, getSlateEditor: ev, containerRef: eI, options: T.markdown })
                          : null,
                    (0, l.jsxs)("div", {
                        ref: ec,
                        className: s()(o, {
                            [e6.gM]: !0,
                            [e6.Bz]: tP && tU,
                            [e6.Qv]: tD && tU,
                            [e6.h9]: tw,
                            [e6.mr]: K,
                            [e6.Wn]: d.Fr,
                            [e6.Ls]: tQ,
                            [e6.AH]: t0,
                            [e6.z3]: null != _,
                        }),
                        children: [
                            tQ || t0 ? null : (0, l.jsx)(t4, { bars: tW }),
                            (0, l.jsxs)("div", {
                                ref: eI,
                                onScroll: tp,
                                className: s()(c, { [e6.xx]: !0, [e6.k6]: !en, [e6.Ri]: tW.stacked.length > 0 }),
                                children: [
                                    (0, l.jsx)(tL, { channelId: j.id, chatInputType: T }),
                                    T.hideAttachmentArea
                                        ? null
                                        : (0, l.jsx)(t9.A, { channelId: j.id, type: T, canAttachFiles: eG }),
                                    (0, l.jsxs)("div", {
                                        className: s()(e6.vW, {
                                            [e6.mb]: tH,
                                            [e6.BF]: tw,
                                            [e6.RL]: T !== td.oU.EDIT && (null != tM || (tw && null == tM) || eF),
                                            [e6.fk]: T === td.oU.THREAD_CREATION,
                                            [e6.TZ]: T === td.oU.CREATE_FORUM_POST || T === td.oU.FORWARD_MESSAGE_INPUT,
                                            [e6.$i]: T === td.oU.USER_PROFILE_REPLY,
                                        }),
                                        onMouseDown: tb,
                                        children: [
                                            t2,
                                            tH
                                                ? (0, l.jsx)(e9, { channelId: j.id })
                                                : (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          tM,
                                                          (0, l.jsx)(p.vN, {
                                                              ringTarget: ec,
                                                              ringClassName: e6.Rg,
                                                              children: (0, l.jsx)(th.A, {
                                                                  ref: eS,
                                                                  id: f,
                                                                  focused: k,
                                                                  useSlate: e$,
                                                                  textValue: r,
                                                                  richValue: a,
                                                                  disabled: eB,
                                                                  placeholder: v,
                                                                  required: x,
                                                                  accessibilityLabel: N,
                                                                  isPreviewing: (eF || eW) && eH,
                                                                  channel: j,
                                                                  type: T,
                                                                  canPasteFiles: eG,
                                                                  uploadPromptCharacterCount: 4e3,
                                                                  maxCharacterCount: q ?? eZ,
                                                                  allowNewLines: J,
                                                                  "aria-describedby": tZ,
                                                                  onChange: e5,
                                                                  onResize: tx,
                                                                  onBlur: V,
                                                                  onFocus: F,
                                                                  onKeyDown: W,
                                                                  onSubmit: e8,
                                                                  onSubmitFailure: t_,
                                                                  onTab: tE,
                                                                  onEnter: ty,
                                                                  onSpace: tS,
                                                                  onMoveSelection: tA,
                                                                  onSelectionChanged: e1,
                                                                  onMaybeShowAutocomplete: tn,
                                                                  onHideAutocomplete: tr,
                                                                  promptToUpload: G,
                                                                  fontSize: eQ,
                                                                  spellcheckEnabled: eX,
                                                                  canOnlyUseTextCommands: tR,
                                                                  className: s()(
                                                                      {
                                                                          [e6.QI]: T === td.oU.THREAD_CREATION,
                                                                          [e6.AV]: T === td.oU.PROFILE_BIO_INPUT,
                                                                          [e6.GR]: T === td.oU.OVERLAY_INLINE_REPLY,
                                                                      },
                                                                      h,
                                                                  ),
                                                                  "aria-labelledby": X,
                                                                  showValueWhenDisabled: es,
                                                              }),
                                                          }),
                                                          t5,
                                                      ],
                                                  }),
                                            t1,
                                        ],
                                    }),
                                ],
                            }),
                            eJ ? null : (0, l.jsx)(ed, { ref: eh, channel: j, canOnlyUseTextCommands: tR }),
                            (0, l.jsx)(ef.A, {
                                ref: tt,
                                channel: j,
                                canMentionRoles: H,
                                canMentionChannels: z,
                                useNewSlashCommands: e$,
                                canOnlyUseTextCommands: tR,
                                canSendStickers: T.stickers?.allowSending,
                                canSendSoundmoji: T.soundmoji?.allowSending,
                                textValue: r,
                                focused: k,
                                expressionPickerView: tC,
                                type: T,
                                targetRef: ec,
                                editorRef: eS,
                                onSendMessage: e8,
                                onSendSticker: tm,
                                onVisibilityChange: tj,
                                editorScrollerRef: eI,
                                editorHeight: tg,
                                barsHeight: 40 * tW.floating.length,
                                setValue: (e, t) => e5?.(null, e, t),
                                position: ee,
                            }),
                            (0, l.jsx)(e_, { textValue: r, editorHeight: tg, channelId: j.id }),
                            t3,
                            et,
                        ],
                    }),
                    (0, l.jsx)(g.U, { error: _ }),
                    tI
                        ? null
                        : (0, l.jsx)(eE.A, {
                              returnRef: eC,
                              positionTargetRef: ec,
                              type: T,
                              onSelectGIF: ta,
                              onSelectEmoji: to,
                              onSelectSticker: tm,
                              onSelectSound: tf,
                              channel: j,
                              closeOnModalOuterClick: el,
                              parentModalKey: ei,
                              position: "top",
                              align: "right",
                              positionLayerClassName: e6.BD,
                          }),
                ],
            }),
        })
    );
});
