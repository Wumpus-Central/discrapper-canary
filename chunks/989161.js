n.d(t, {
    Ay: () => nA,
    v7: () => ng,
    uW: () => nC,
    ck: () => nE,
    ml: () => np,
    MD: () => ny,
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
    S = n(775602),
    y = n(793574),
    C = n(688810),
    A = n(177640),
    b = n(989837),
    I = n(289873),
    v = n(268218),
    N = n(750506),
    T = n(60809),
    k = n(792996),
    j = n(836555);
let _ = { width: 500, height: T.$V },
    R = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e(609019),
                n.e(237427),
                n.e(166171),
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
                n.e(638221),
                n.e(571210),
                n.e(445980),
                n.e(88342),
                n.e(936320),
                n.e(132191),
                n.e(311802),
                n.e(698965),
                n.e(918024),
                n.e(538887),
                n.e(37977),
                n.e(354044),
                n.e(437065),
                n.e(235313),
                n.e(454625),
                n.e(636373),
                n.e(230664),
                n.e(655708),
                n.e(335395),
                n.e(371133),
                n.e(408362),
                n.e(715038),
                n.e(252229),
                n.e(165362),
                n.e(522261),
                n.e(472289),
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
        renderLoader: () => (0, l.jsx)("div", { className: j.R4, style: _, children: (0, l.jsx)(I.y, {}) }),
    }),
    w = { height: T.$V },
    O = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: T.sK,
            children: (0, l.jsx)(N.nE, {
                className: j.T8,
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
                        className: j.V6,
                        role: "dialog",
                        style: w,
                        "aria-label": k.intl.string(k.t["3CNGLK"]),
                        children: t && (0, l.jsx)(R, { ...i }),
                    });
                },
            }),
        });
    });
var L = n(861382),
    M = n(435558),
    P = n.n(M),
    D = n(537652),
    U = n(155718),
    V = n(149468),
    W = n(927659),
    B = n(579940),
    F = n(962125),
    G = n(915089),
    K = n(850992),
    H = n(887695),
    z = n(286509),
    q = n(721768),
    $ = n(842209),
    Q = n(210978),
    Z = n(392054),
    X = n(168186),
    Y = n(866665),
    J = n(939249),
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
                            (0, l.jsx)(Y.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, l.jsx)(J.D, {
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
            commands: S,
            filteredSectionId: y,
            scrollDown: C,
            filterSection: A,
        } = $.cu({
            context: { channel: t, type: "channel" },
            filters: { commandTypes: [U.kc.CHAT], builtIns: n ? Q.n.ONLY_TEXT : Q.n.ALLOW, applicationCommands: !n },
            options: { placeholderCount: 7, limit: 10, includeFrecency: !0 },
            allowFetch: !0,
        }),
        b = (0, H.Fk)({
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
    function I(e) {
        let t = g.length,
            n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!E;
        (E && e + 420 > 48 * t + 56 * n - 512 && C(), b(e), ec(), (o.current = e));
    }
    let v = i.useRef(I);
    (i.useEffect(() => {
        v.current = I;
    }),
        i.useEffect(() => {
            v.current(o.current);
        }, [S]));
    let N = i.useCallback((e) => (e !== g.length - 1 || E ? 16 : 0), [g.length, E]),
        T = x.map((e) => e.data.length);
    (i.useEffect(() => {
        null != d.current && h && null != u && d.current.scrollRowIntoView(u);
    }, [h, u]),
        i.useLayoutEffect(() => {
            null != y && d.current?.scrollToSectionTop(0);
        }, [S, y]));
    let j = i.useCallback(
            (e) => {
                e.id === y || e.id === es.Ik.FRECENCY ? (A(null), d.current?.scrollToSectionTop(0)) : A(e.id);
            },
            [A, y],
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
                        _(n, l, (0, X.$S)(e.section));
                        break;
                    }
                return !0;
            },
            onMoveSelection: (e) => {
                if (0 === S.length) return !0;
                let t = 7 * !!E,
                    n = S.length + t,
                    l = null == u ? 0 : u + e;
                return (l >= n ? (l = n - 1) : l < 0 && (l = 0), c(l), m(!0), !0);
            },
        }),
        [S.length, x, E, p, _, u],
    );
    let R = i.useCallback(
            (e) => {
                let n = g[e];
                if (null == n) return null;
                let i = (0, et.Rg)(n),
                    r = (0, l.jsx)(i, { channel: t, section: n, width: 16, height: 16, padding: 0 });
                return (0, l.jsx)(z.A, { className: eo.Km, icon: r, children: n.name }, e);
            },
            [t, g],
        ),
        w = i.useCallback(
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
                                    message: k.intl.format(k.t.WoQXT6, { applicationName: i.name }),
                                    className: eo.qK,
                                }),
                        ],
                    },
                    e,
                );
            },
            [g, x],
        ),
        O = i.useCallback(
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
                    W.Ay.NewCommand,
                    {
                        index: e,
                        command: r,
                        channel: t,
                        className: eo.D5,
                        selected: u === e,
                        showImage: i.section.id !== r.applicationId,
                        section: a,
                        onClick: () => _(r, a, (0, X.$S)(i.section)),
                        onHover: () => {
                            (c(null), m(!1));
                        },
                    },
                    s,
                );
            },
            [t, x, _, p, u],
        ),
        L = (0, G.GV)();
    return (
        (0, B.gf)(L, !0, (0, W.aI)(u)),
        i.useEffect(
            () => () => {
                (0, B.nQ)();
            },
            [],
        ),
        (0, l.jsxs)(W.Ay, {
            id: L,
            className: eo.x9,
            innerClassName: eo.iE,
            onMouseDown: eh,
            children: [
                (0, l.jsx)(ei, {
                    className: eo.H$,
                    channel: t,
                    sections: p,
                    filteredSectionId: y,
                    activeCategoryIndex: f,
                    onSectionClick: j,
                    applicationCommandListRef: d,
                }),
                (0, l.jsx)(F.A, {
                    role: "listbox",
                    className: eo.p_,
                    listPadding: eu,
                    onScroll: I,
                    renderRow: O,
                    renderSection: w,
                    renderSectionHeader: R,
                    rowCount: g.length,
                    rowCountBySection: T,
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
    ef = n(133746),
    ep = n(31498),
    eg = n(598071),
    ex = n(151271),
    eE = n(357354),
    eS = n(256265);
n(336807);
var ey = n(857071),
    eC = n(135621),
    eA = n(105330),
    eb = n(46653),
    eI = n(559908),
    ev = n(620141),
    eN = n(224964),
    eT = n(31408),
    ek = n(77183);
function ej(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        r = i.useRef(n),
        s = (0, eA.l)({ editorHeight: t }),
        a = (0, eN.A)(),
        o = (0, m.bG)([eI.Ay, eb.default], () => eI.Ay.isComboing(eb.default.getId(), l)),
        u = s?.left ?? 0,
        c = (s?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== r.current && o && (a.fire(u, c, h ? { sprite: ek.dR } : null), (r.current = n));
        }, [n, o, u, c, h, a]),
        null
    );
}
function e_(e) {
    return (0, l.jsx)(ev.A, { confettiLocation: eT.k.CHAT_INPUT, children: (0, l.jsx)(ej, { ...e }) });
}
var eR = n(931664),
    ew = n(631576),
    eO = n(522602);
let eL = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    eM = /(\n|\t|\s)/g;
var eP = n(832628),
    eD = n(406704),
    eU = n(253932),
    eV = n(951260),
    eW = n(29080),
    eB = n(834730),
    eF = n(241326),
    eG = n(559647),
    eK = n(243185),
    eH = n(153440);
n(321073);
var ez = n(539451),
    eq = n(841817),
    e$ = n(518950),
    eQ = n(115921);
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
            function S(e) {
                return Math.max(0, Math.min(1, e / 255));
            }
            function y(e, t) {
                let n = new ez.A(t ? 0 : e);
                return (t && n.animateTo(e), { target: e, animator: n });
            }
            return (
                (l = requestAnimationFrame(function c(C) {
                    if (i) return;
                    let A = null == g ? 0 : Math.min(C - g, 100);
                    g = C;
                    let { clientWidth: b, clientHeight: I } = e;
                    ((e.width !== b * r || e.height !== I * r) && ((e.width = b * r), (e.height = I * r)),
                        n.clearRect(0, 0, e.width, e.height),
                        (n.fillStyle = window.getComputedStyle(e).color));
                    let v = (0, eq.yM)(t) ?? [];
                    (!(function (e, t) {
                        if (e === a) return;
                        let n = (s.length > 0 ? s : t.map((e) => y(S(e), !1))).slice(-e);
                        ((s = Array.from({ length: Math.max(0, e - n.length) }, () => y(0, !1)).concat(n)),
                            (a = e),
                            (u = s[s.length - 1]?.target ?? 0));
                    })(Math.max(1, Math.ceil(b / 6) + 2), v),
                        v.length < o && ((s = Array.from({ length: a }, () => y(0, !1))), (u = 0), (p = 48)),
                        (o = v.length));
                    let N = v.length > 0 ? S(v[v.length - 1]) : u;
                    if (d.current)
                        for (p += A; p >= 48;) {
                            var T;
                            ((u += (N - u) * 0.45),
                                (T = u),
                                s.push(y(T, !h.current)),
                                s.length > a && s.splice(0, s.length - a),
                                (p -= 48));
                        }
                    else p = Math.min(48, p + A);
                    let k = e.width,
                        j = e.height,
                        _ = 6 * r,
                        R = 2 * r,
                        w = +r,
                        O = 24 * r,
                        L = 2 * r,
                        M = d.current && !h.current ? _ * (1 - p / 48) : 0,
                        P = k - s.length * _ + M;
                    !m.current || h.current ? ((x = null), (E = !1)) : null == x && (x = C);
                    let D = null == x ? null : C - x;
                    (null != D && D >= 100 && !E && ((E = !0), f.current()), n.beginPath());
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            l = h.current ? t.target : Math.max(0, t.animator.getCurrentValue()),
                            i = s.length > 1 ? (e / (s.length - 1)) * 40 : 0,
                            r = null == D ? 0 : Math.max(0, Math.min((D - i) / 60, 1)),
                            a = l * (1 - r * r) * (O - L) + L,
                            o = P + e * _,
                            u = (j - a) / 2;
                        n.roundRect(o, u, R, a, w);
                    }
                    (n.fill(), (l = requestAnimationFrame(c)));
                })),
                () => {
                    ((i = !0), cancelAnimationFrame(l));
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: c, className: s()(eQ.J, n), "aria-hidden": !0 })
    );
}
var eX = n(113494),
    eY = n(782134),
    eJ = n(527388),
    e0 = n(188567),
    e1 = n(587481),
    e2 = n(408822),
    e5 = n(698279),
    e3 = n(252433),
    e8 = n(495088);
function e6(e) {
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
    let S = i.useCallback(() => {
            (h(!0), c((e) => !e));
        }, []),
        y = i.useCallback(
            (e) => {
                let t = o.current;
                if (null == t) return;
                let n = e * x;
                ((t.currentTime = n), g(n), h(!0));
            },
            [x],
        ),
        C = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            Number.isFinite(t) && t > 0 && E(t);
        }, []),
        A = i.useCallback(() => {
            let e = o.current;
            (null != e && (e.currentTime = 0), g(0), c(!1), h(!1));
        }, []),
        b = i.useCallback(() => {
            (f(!1), p >= x && A());
        }, [p, x, A]),
        I = d ? Math.max(0, Math.ceil(x - p)) : Math.ceil(x),
        v = u ? eX.PauseIcon : eY.PlayIcon,
        N = u ? k.intl.string(k.t["3XohGn"]) : k.intl.string(k.t.AlHqHT),
        T = u ? k.intl.string(k.t.ZcgDJX) : k.intl.string(k.t.RscU7I);
    return (0, l.jsxs)("div", {
        className: e3._W,
        children: [
            (0, l.jsx)(Y.m, {
                text: T,
                children: (0, l.jsx)("div", {
                    className: s()(e5.VQ, e8.UD),
                    children: (0, l.jsx)(eK.A, { className: e8.x6, onClick: S, isActive: u, icon: v, "aria-label": N }),
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
                onDrag: y,
                onDragStart: () => f(!0),
                onDragEnd: b,
            }),
            (0, l.jsx)("div", {
                className: e3.RE,
                children: (0, l.jsx)(eB.E, {
                    variant: "body-sm/normal",
                    className: e3.O1,
                    tabularNumbers: !0,
                    children: (0, eH.rB)(I),
                }),
            }),
            (0, l.jsx)(eJ.A, {
                ref: o,
                className: e3.Zn,
                controls: !1,
                preload: "metadata",
                onEnded: A,
                onLoadedMetadata: C,
                onError: () => c(!1),
                volume: (0, e1.v1)(),
                playing: u && !m,
                children: (0, l.jsx)("source", { src: n.src }),
            }),
        ],
    });
}
var e7 = n(709372),
    e9 = n(984680);
let e4 = i.memo(function (e) {
    var t;
    let { channelId: n } = e,
        r = i.useRef(null);
    i.useEffect(() => {
        r.current?.focus();
    }, []);
    let a = (0, e7.om)(n),
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
        d = (0, m.bG)([S.Ay], () => S.Ay.useReducedMotion),
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
        y = p && !d && null != f;
    i.useEffect(() => {
        u && p && (null == document.activeElement || document.activeElement === document.body) && r.current?.focus();
    }, [p, u]);
    let C = i.useCallback(() => {
            null != f && E(f);
        }, [f]),
        A = i.useCallback(() => {
            (0, eq.nM)(n) && g(!0);
        }, [n]),
        b = i.useCallback(() => {
            o ? (0, eq.$G)(n) : u && (0, eq.SC)(n);
        }, [n, u, o]),
        I = i.useCallback(
            (e) => {
                "Enter" !== e.key ||
                    e.repeat ||
                    e.shiftKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.nativeEvent.isComposing ||
                    (!o && !u) ||
                    (e.preventDefault(), e.stopPropagation(), b());
            },
            [b, u, o],
        );
    if (null == a) return null;
    let v = u ? Math.round(a.recordedDurationSecs ?? 0) : c,
        N = o || u,
        T = y ? x : f,
        j = y && null == T;
    return (0, l.jsxs)("div", {
        className: e9.M0,
        role: "group",
        "aria-label": k.intl.string(k.t.lwy6aX),
        children: [
            null != T
                ? (0, l.jsx)(e6, { playback: T, durationSecs: a.recordedDurationSecs ?? 0, animateWaveformEntrance: y })
                : (0, l.jsxs)("div", {
                      className: e9.Fg,
                      children: [
                          o
                              ? (0, l.jsx)(Y.m, {
                                    text: k.intl.string(k.t.hHBkuG),
                                    children: (0, l.jsx)("div", {
                                        className: s()(e5.VQ, e8.UD),
                                        children: (0, l.jsx)(eK.A, {
                                            className: e8.x6,
                                            onClick: A,
                                            isActive: !1,
                                            icon: eW.StopIcon,
                                            "aria-label": k.intl.string(k.t["cmFRF+"]),
                                        }),
                                    }),
                                })
                              : null,
                          (0, l.jsx)(eZ, {
                              channelId: n,
                              className: e9.ou,
                              recording: o,
                              reducedMotion: d,
                              collapsing: j,
                              onCollapseComplete: C,
                          }),
                          (0, l.jsxs)("div", {
                              className: e9.RE,
                              children: [
                                  (0, l.jsx)("div", { className: s()(e9.Zz, { [e9.Py]: !o }), "aria-hidden": !0 }),
                                  (0, l.jsx)(eB.E, {
                                      variant: "body-sm/normal",
                                      className: s()(e9.O1, { [e9.w2]: h }),
                                      tabularNumbers: !0,
                                      children: (0, eH.rB)(v),
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, l.jsx)("div", { className: e9.yF, "aria-hidden": !0 }),
            (0, l.jsx)(Y.m, {
                text: k.intl.string(k.t.oyYWHE),
                children: (0, l.jsx)("div", {
                    className: s()(e5.VQ, e8.UD),
                    children: (0, l.jsx)(eK.A, {
                        className: e8.x6,
                        onClick: () => (0, eq.eT)(n),
                        isActive: !1,
                        icon: eF.TrashIcon,
                        "aria-label": k.intl.string(k.t.RdK9sV),
                    }),
                }),
            }),
            (0, l.jsx)(Y.m, {
                text: k.intl.string(k.t.TXNS7S),
                children: (0, l.jsx)("div", {
                    className: s()(e5.VQ, e8.UD),
                    onKeyDown: I,
                    children: (0, l.jsx)(eK.A, {
                        ref: r,
                        className: e9.jo,
                        childClassName: s()(e9.Jp, { [e9.Tq]: !N }),
                        onClick: N ? b : void 0,
                        disabled: !N,
                        noHover: !N,
                        isActive: !1,
                        "aria-label": k.intl.string(k.t["+8GStU"]),
                        children: (0, l.jsx)(eG.SendMessageIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: e9.AO,
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
    tS = n(763754),
    ty = n(967144),
    tC = n(118517),
    tA = n(976860),
    tb = n(747926),
    tI = n(596344),
    tv = n(285796),
    tN = n(595347);
function tT(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(J.D, {
        className: tN.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(tv.CircleXIcon, { size: "md", color: "currentColor", className: tN.u }),
    });
}
var tk = n(558497);
let tj = "channel-reply-bar-a11y-description";
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
        (0, l.jsxs)(J.D, {
            onClick: function () {
                ((0, tC.Jx)(t.id), (0, tb.Tv)(t, n, "Reply Chain Nudge"));
            },
            className: tk._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(eB.E, {
                    color: "text-default",
                    className: tk.Qq,
                    variant: "body-sm/normal",
                    children: k.intl.format(k.t.B3V0FM, { count: Math.min(10, r + 1) }),
                }),
                (0, l.jsx)(eB.E, {
                    color: "text-link",
                    className: tk.NG,
                    variant: "body-sm/semibold",
                    children: k.intl.string(k.t.rBIGBL),
                }),
            ],
        })
    );
}
function tR(e) {
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
            authorId: S,
            displayNameStyles: y,
        } = (0, tS.Ay)(u),
        C = (0, ty.gn)(f, S, x),
        A = (0, tx.a)({ displayNameStyles: y }),
        b = (0, tE.A)(h, u.attachments),
        I =
            ((t = o.id),
            (n = u.id),
            (0, m.bG)(
                [tI.A],
                () => {
                    let e = n;
                    for (let n = 0; n < 10; n++) {
                        let l = tI.A.getMessage(t, e);
                        if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                        e = l.messageReference.message_id;
                    }
                    return 10;
                },
                [t, n],
            )),
        v = (0, eD.n)(o, u),
        N = a.showThreadPromptOnReply && I >= 2 && v;
    return (0, l.jsx)("div", {
        className: tk.e1,
        children: (0, l.jsxs)("div", {
            className: tk.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tk.eU,
                    children: [
                        (0, l.jsx)(tm.A, { id: tj, children: k.intl.formatToPlainString(k.t.EpJL4E, { username: p }) }),
                        (0, l.jsx)(J.D, {
                            onClick: function () {
                                return (0, tA.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(eB.E, {
                                color: "text-default",
                                className: s()(tk.Qq, tk.Fn),
                                variant: "body-sm/normal",
                                children: k.intl.format(k.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsx)(
                                            i.Fragment,
                                            {
                                                children:
                                                    b?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: tk.H8,
                                                              children: [
                                                                  b.isClip &&
                                                                      (0, l.jsx)(tf.ClipsIcon, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: tk.gS,
                                                                      }),
                                                                  (0, l.jsx)(eB.E, {
                                                                      variant: "body-sm/semibold",
                                                                      color: "text-default",
                                                                      className: tk.NV,
                                                                      children: b.title,
                                                                  }),
                                                                  (0, l.jsxs)(eB.E, {
                                                                      variant: "body-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", b.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(tp.g, {
                                                              className: tk.UU,
                                                              name: p,
                                                              colorString: g,
                                                              colorStrings: C,
                                                              roleName: E,
                                                              displayNameStylesFont: A,
                                                          }),
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: tk.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(Y.m, {
                                                asContainer: !0,
                                                text: c ? k.intl.string(k.t.DH2o6R) : k.intl.string(k.t.utGGIY),
                                                children: (0, l.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        (e.stopPropagation(), (0, tC.vz)(o.id, !c));
                                                    },
                                                    children: (0, l.jsxs)(eB.E, {
                                                        variant: "body-sm/semibold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: tk.Z4,
                                                        children: [
                                                            (0, l.jsx)(tg.AtIcon, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": k.intl.string(k.t.P8tvKG),
                                                                className: tk.mM,
                                                            }),
                                                            c ? k.intl.string(k.t.p9jC2r) : k.intl.string(k.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: tk.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(tT, {
                                    onClick: function (e) {
                                        (e.stopPropagation(), (0, tC.Jx)(o.id));
                                    },
                                    "aria-label": k.intl.string(k.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                N && (0, l.jsx)(t_, { channel: o, message: u, replyChainLength: I }),
            ],
        }),
    });
}
var tw = n(202501),
    tO = n(148355),
    tL = n(218782);
let tM = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [r, s] = i.useState(null),
        a = (0, m.bG)([eR.A], () => eR.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != a && 0 !== a.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: tL.Tz,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: tL.dp,
                                  children: [
                                      (0, l.jsx)(J.D, {
                                          onFocus: () => s(e.id),
                                          onBlur: () => s(null),
                                          className: tL.b,
                                          "aria-label": k.intl.formatToPlainString(k.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, ew.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: tL.Nk,
                                              children: (0, l.jsx)(tv.CircleXIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tL.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(tO.A, {
                                          isInteracting: r === e.id,
                                          className: tL.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(tw.A, { className: tL.R }),
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
                          let { default: e } = await Promise.all([n.e(638221), n.e(715687)]).then(n.bind(n, 646938));
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: k.intl.string(k.t.oJ1Muw) });
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
                    (0, l.jsx)(eB.E, {
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
                children: (0, l.jsx)(tT, { onClick: f, "aria-label": k.intl.string(k.t.cpT0Cq) }),
            }),
        ],
    });
}
var tW = n(73153),
    tB = n(734057);
let tF = new Set();
class tG extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        (this.waitFor(tB.A, te.Ay, tn.Ay, ti.default), null != e && (tF = new Set(e)));
    }
    hasId(e) {
        return tF.has(e);
    }
    getState() {
        return [...tF];
    }
}
let tK = new tG(tW.h, {});
function tH() {
    let e = tn.Ay.getChannelId();
    if (null == e) return;
    let t = tB.A.getChannel(e);
    null != t && t.isPrivate() && (tF.has(t.getRecipientId()) || (tF.add(t.getRecipientId()), tK.emitChange()));
}
function tz() {
    return (0, l.jsxs)("div", {
        className: tk.eU,
        children: [
            (0, l.jsx)(eB.E, {
                variant: "body-sm/medium",
                className: s()(tk.Qq, tk.Fn),
                children: k.intl.string(k.t["2UvR1E"]),
            }),
            (0, l.jsx)("div", {
                className: tk.o1,
                children: (0, l.jsx)(tT, { onClick: tH, "aria-label": k.intl.string(k.t.cpT0Cq) }),
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
            (0, l.jsx)(eB.E, {
                variant: "body-xs/semibold",
                color: "text-strong",
                children: k.intl.string(k.t["4VDCG0"]),
            }),
            t
                ? (0, l.jsx)(eB.E, { variant: "body-xs/medium", className: tq.z, children: k.intl.string(k.t.qNorwt) })
                : (0, l.jsx)(eB.E, {
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: k.intl.string(k.t["260qZS"]),
                  }),
        ],
    });
}
var tQ = n(25201),
    tZ = n(926321),
    tX = n(399482);
function tY(e) {
    var t, n;
    let { channelId: i } = e,
        r = (0, tQ.vR)(i);
    if (null == r) return null;
    let a = r.rolling,
        o =
            ((t = a),
            (n = r.results),
            t
                ? k.intl.string(k.t["x/FIRX"])
                : null == n
                  ? ""
                  : k.intl.formatToPlainString(k.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: s()(tX.kL, { [tX.Kd]: !r.dismissing }),
        children: (0, l.jsxs)("div", {
            className: tX.Qs,
            children: [
                (0, l.jsx)(tZ.DiceIcon, { size: "md", className: s()({ [tX.su]: a }) }),
                (0, l.jsx)(eB.E, { color: "text-default", variant: "body-sm/normal", children: o }),
            ],
        }),
    });
}
var tJ = n(575293),
    t0 = n(536637),
    t1 = n.n(t0),
    t2 = n(31717),
    t5 = n(551640),
    t3 = n(970244),
    t8 = n(29621);
function t6(e) {
    let { channel: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: r } = n,
        s = i.useId();
    return (0, l.jsx)("div", {
        className: t8.e1,
        children: (0, l.jsx)("div", {
            className: t8.kL,
            children: (0, l.jsxs)("div", {
                className: t8.g3,
                children: [
                    (0, l.jsx)(J.D, {
                        className: t8.a3,
                        "aria-describedby": s,
                        onClick: function () {
                            (0, t3.e0)({
                                channel: t,
                                defaultValue: t1()(r),
                                entryPoint: t5.t.COMPOSER_BAR,
                                isEditing: !0,
                            });
                        },
                        children: (0, l.jsx)(eB.E, {
                            color: "text-default",
                            className: t8.Qq,
                            variant: "body-sm/normal",
                            children: k.intl.formatToPlainString(k.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                        }),
                    }),
                    (0, l.jsx)(tm.A, { id: s, children: k.intl.string(k.t.SBcdAN) }),
                    (0, l.jsx)("div", {
                        className: t8.o1,
                        children: (0, l.jsx)(tT, {
                            onClick: function (e) {
                                (e.stopPropagation(), x.A.clearDraft(t.id, t2.C.ScheduledMessage));
                            },
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function t7(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        r = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === r.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  r.length > 0 && (0, l.jsx)("div", { className: e8.Vq, children: r }),
                  n.length > 0 && (0, l.jsx)("div", { className: e8.MD, children: n }),
              ],
          });
}
var t9 = n(4025),
    t4 = n(102077),
    ne = n(246049),
    nt = n(135261),
    nn = n(339200),
    nl = n(265872),
    ni = n(375499),
    nr = n(920134),
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
                          return (0, l.jsx)(nr.A, {
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
                let E = eR.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    S = eO.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !p && (0, eS.xz)(S, a)) {
                    (u(!1),
                        (0, f.mM)(async () => {
                            let { default: e } = await Promise.all([
                                n.e(686889),
                                n.e(786830),
                                n.e(587882),
                                n.e(560570),
                                n.e(896691),
                                n.e(779367),
                                n.e(992956),
                                n.e(428643),
                                n.e(630290),
                                n.e(189423),
                                n.e(77413),
                                n.e(166171),
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
                                n.e(334733),
                                n.e(706073),
                                n.e(227512),
                                n.e(452880),
                                n.e(339282),
                                n.e(508702),
                                n.e(126437),
                                n.e(481647),
                                n.e(749248),
                                n.e(704434),
                                n.e(879315),
                                n.e(37085),
                                n.e(890027),
                                n.e(900361),
                                n.e(21921),
                                n.e(445980),
                                n.e(139970),
                                n.e(508371),
                                n.e(179049),
                                n.e(693832),
                                n.e(412743),
                                n.e(294857),
                                n.e(826240),
                                n.e(179745),
                                n.e(455924),
                                n.e(803332),
                                n.e(254506),
                                n.e(432209),
                                n.e(250478),
                                n.e(957506),
                                n.e(858337),
                                n.e(362422),
                                n.e(97210),
                                n.e(789573),
                                n.e(968763),
                                n.e(356296),
                                n.e(732272),
                                n.e(118917),
                                n.e(562168),
                                n.e(526778),
                                n.e(698547),
                                n.e(935948),
                                n.e(24922),
                                n.e(24889),
                                n.e(213924),
                                n.e(647177),
                                n.e(702813),
                                n.e(872893),
                                n.e(144989),
                                n.e(964320),
                                n.e(836150),
                                n.e(699011),
                                n.e(472789),
                                n.e(803191),
                                n.e(150200),
                                n.e(710014),
                                n.e(486155),
                                n.e(335986),
                                n.e(777848),
                                n.e(386861),
                                n.e(770961),
                                n.e(846066),
                                n.e(714573),
                                n.e(684688),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: a,
                                    attachments: S,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        }));
                    return;
                }
                e({
                    value: i,
                    uploads: S,
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
        { analyticsLocations: o } = (0, C.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (s === td.oU.CREATE_ANNOUNCEMENT_POST ||
                s === td.oU.CREATE_FORUM_POST ||
                (function (e, t, n, l) {
                    if (eO.A.getUploadCount(n, l) > 0) return !0;
                    let i = eR.A.getStickerPreview(n, l);
                    if (null != i && i.length > 0) return !0;
                    switch (e) {
                        case eP.D6.STICKER_PICKER:
                            return "" !== t.trim();
                        case eP.D6.AUTOCOMPLETE:
                            var r;
                            return (
                                (null == (r = t) ? [] : r.replace(eL, "").replace(eM, " ").trim().split(" ")).length > 1
                            );
                        case eP.D6.BUILT_IN_INTEGRATION:
                        default:
                            return !1;
                    }
                })(i, l, r, s.drafts.type)
                    ? ((0, tP.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != eR.A.getStickerPreview(r, s.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, ew.$x)(r, e, s.drafts.type))
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
function nE(e) {
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
        r = (0, m.bG)([ey.A], () => null != i && ey.A.isLurking(i), [i]),
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
function ny(e, t, n) {
    let [l, r, s] = (0, ex.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        a = (0, m.bG)([b.A], () => b.A.shouldShowPopup() && b.A.activeViewType() === e && b.A.activeChannelId() === n);
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
let nA = i.memo(function (e) {
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
            disabled: I,
            placeholder: v,
            accessibilityLabel: N,
            channel: T,
            type: k,
            focused: j,
            error: _,
            renderAttachButton: R,
            renderApplicationCommandIcon: w,
            renderButtons: M,
            pendingReply: P,
            onChange: D,
            onResize: U,
            onBlur: V,
            onFocus: W,
            onKeyDown: B,
            onSubmit: F,
            promptToUpload: G,
            highlighted: K,
            canMentionRoles: H,
            canMentionChannels: z,
            maxCharacterCount: q,
            showRemainingCharsAfterCount: $,
            allowNewLines: Q = !0,
            characterCountClassName: Z,
            "aria-describedby": X,
            "aria-labelledby": Y,
            setEditorRef: J,
            autoCompletePosition: ee,
            children: et,
            disableThemedBackground: en = !1,
            emojiPickerCloseOnModalOuterClick: el,
            parentModalKey: ei,
            scheduledMessageDraft: er,
            showValueWhenDisabled: es = !1,
            ref: eo,
        } = e;
    u()(null != k, "chat input type must be set");
    let { analyticsLocations: eu } = (0, C.Ay)(y.A.CHANNEL_TEXT_AREA),
        ec = nx(eo),
        eh = i.useRef(null),
        eS = i.useRef(null),
        ey = i.useRef(null),
        eA = i.useRef(null),
        eb = i.useRef(null),
        eI = i.useCallback(() => ey.current?.getSlateEditor() ?? null, []);
    J?.(ey.current);
    let ev = (0, A.A)(T),
        eN = (0, eV.n)("ChannelTextAreaContainer"),
        eT = (0, m.cf)([S.Ay], () => ({
            expressionPickerFormat: S.Ay.expressionPickerFormat,
            condensePickerWhenNarrow: S.Ay.condensePickerWhenNarrow,
        })),
        ek = eN ? eT.expressionPickerFormat : S.IG.FLEXIBLE,
        ej = !eN || eT.condensePickerWhenNarrow,
        [eR, ew] = i.useState(!ev);
    (0, E.i4)(ec, (e) => {
        let { width: t } = e;
        return ew(!ev && (null == t || t > 450));
    });
    let eO = ek === S.IG.HIDDEN,
        eL = ek === S.IG.CONDENSED || (ek === S.IG.FLEXIBLE && ej && !eR),
        { activeCommand: eM, activeCommandSection: eP } = (0, m.cf)([L.A], () => ({
            activeCommand: k.commands?.enabled ? L.A.getActiveCommand(T.id) : null,
            activeCommandSection: k.commands?.enabled ? L.A.getActiveCommandSection(T.id) : null,
        })),
        {
            isLurking: eD,
            isPendingMember: eW,
            disabled: eB,
            canAttachFiles: eF,
            canCreateThreads: eG,
            canEveryoneSendMessages: eK,
        } = nS(T, k, eM, I),
        eH = k.toolbarType === td.O1.STATIC,
        ez = !eU.D_.useSetting() && !(0, tu.Ct)() && null != window.ResizeObserver,
        e$ = !ez || !k.commands?.enabled || !j || "/" !== r,
        eQ = (0, eC.A)(),
        { fontSize: eZ } = (0, m.cf)([S.Ay], () => ({ fontSize: S.Ay.fontSize })),
        eX = (0, m.bG)([tl.A], () => tl.A.isEnabled());
    nf(k, eB, T.id);
    let { eventEmitter: eY, handleEditorSelectionChanged: eJ } = np(ey, r, a),
        e1 = i.useRef(r);
    e1.current = r;
    let e2 = i.useCallback(
            (e, t, n) => {
                ("/" === t && "" === e1.current && k.commands?.enabled && eY.emit("command-sentinel-typed"),
                    D?.(e, t, n));
            },
            [D, k.commands?.enabled, eY],
        ),
        { submitting: e5, submit: e3, handleSubmit: e6 } = nc(F, k, ey, eb, T.id),
        { autocompleteRef: e9, handleMaybeShowAutocomplete: tt, handleHideAutocomplete: tn } = ng(),
        tr = nd(e3, k, ey),
        ta = nh(ey),
        to = nm({ editorRef: ey, disabled: eB, textValue: r, channelId: T.id, chatInputType: k, submit: F }),
        tm = i.useCallback(
            (e, t, n) => {
                let l = ey.current;
                (null != e &&
                    null != l &&
                    (ts.default.track(ea.HAw.SOUNDMOJI_SELECT, {
                        channel_id: T.id,
                        guild_id: T.guild_id,
                        sound_guild_id: e.guildId,
                        sound_id: e.soundId,
                        source: t,
                    }),
                    l.insertSound(e)),
                    n && (0, ex.v8)(),
                    l?.focus());
            },
            [ey, T.id, T.guild_id],
        ),
        tf = i.useCallback(() => eb?.current?.hide(), []),
        { editorHeight: tp, handleResize: tg } = nE(U),
        {
            handleTab: tx,
            handleEnter: tE,
            handleSpace: tS,
            handleMoveSelection: ty,
        } = ((t = i.useCallback(
            () => !!(!e$ && eh.current?.onTabOrEnter(!1)) || e9.current?.onTabOrEnter(!1) || !1,
            [e$, eh, e9],
        )),
        (n = i.useCallback(
            () => !!(!e$ && eh.current?.onTabOrEnter(!0)) || e9.current?.onTabOrEnter(!0) || !1,
            [e$, eh, e9],
        )),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => e9.current?.onSpace() || !1, [e9]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!e$ && eh.current?.onMoveSelection(e)) || e9.current?.onMoveSelection(e) || !1,
                [e$, eh, e9],
            ),
        }),
        { expressionPickerView: tC, shouldHideExpressionPicker: tA, handleOuterClick: tb } = ny(k, ey, T.id),
        { selectedAutocompleteInputType: tI, selectedAutocompleteInputError: tv } = (function (e, t) {
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
        })(eY, ey),
        { handleAutocompleteVisibilityChange: tN } = nC(k, T.id),
        tT = (function (e) {
            let { type: t, channelId: n } = e;
            return (0, em.bG)(
                [b.A],
                () => {
                    let e = b.A.activeViewType();
                    return null != e && e === t && b.A.activeChannelId() === n && b.A.shouldShowPopup();
                },
                [t, n],
            );
        })({ type: k, channelId: T.id }),
        tk = i.useCallback(() => {
            eY.emit("submit-failure");
        }, [eY]);
    (0, tc.R)(eY, T.guild_id, T.id);
    let t_ = null != P,
        tw = (eB && !((eD || eW) && eK)) || (e5 && k.submit?.useDisabledStylesOnSubmit),
        tO = null;
    null != eM ? (tO = w?.(eM, eP, e8.g$)) : (!eB || eG) && (tO = R?.(t_, e8.g$));
    let { isVisible: tL, showsUpsell: tP } = (0, nu.A)({
            type: k,
            textValue: r,
            maxCharacterCount: q,
            showRemainingCharsAfterCount: $,
        }),
        tD = ez && null != a && !eB && k.showCharacterCount && null == eM,
        tU = ez && !__OVERLAY__ && null != a && null == eM && k.toolbarType !== td.O1.NONE && !eB,
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
                { activeCommandOption: c, activeCommandOptionStates: d } = (0, m.cf)([L.A], () => ({
                    activeCommandOption: L.A.getActiveOption(t.id),
                    activeCommandOptionStates: L.A.getOptionStates(t.id),
                })),
                h = (0, m.bG)([te.Ay, ti.default, tK], () => {
                    let e = ti.default.getCurrentUser();
                    if (null == e || !e.isStaff() || !t.isDM()) return !1;
                    let n = ti.default.getUser(t.getRecipientId());
                    if (!n?.isStaff()) return !1;
                    let l = te.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                    return l ? !tK.hasId(n.id) && l : (tF.delete(n.id) && tK.emitChange(), !1);
                }),
                f = (0, tQ.Ay)((e) => e.channelId === t.id);
            return i.useMemo(() => {
                let e = [],
                    i = [];
                return (
                    null != t.guild_id &&
                        n === td.oU.NORMAL &&
                        i.push((0, l.jsx)(tJ.A, { guildId: t.guild_id, channel: t, className: e8.UW })),
                    null != r &&
                        e.push(
                            (0, l.jsx)(tV, {
                                activeCommand: r,
                                activeOption: c ?? null,
                                optionStates: d,
                                channelId: t.id,
                            }),
                        ),
                    null != s && e.push((0, l.jsx)(tR, { reply: s, chatInputType: n })),
                    h && e.push((0, l.jsx)(tz, {})),
                    null != a && e.push((0, l.jsx)(t6, { channel: t, scheduledMessageDraft: a })),
                    "timestampMentionInput" === o && i.push((0, l.jsx)(t$, { error: u ?? !1 })),
                    f && e.push((0, l.jsx)(tY, { channelId: t.id })),
                    { stacked: e, floating: i }
                );
            }, [r, c, d, t, f, s, h, n, a, o, u]);
        })({
            channel: T,
            type: k,
            activeCommand: eM,
            pendingReply: P,
            scheduledMessageDraft: er,
            selectedAutocompleteInputType: tI,
            selectedAutocompleteInputError: tv,
        }),
        tB = 0 === r.trim().length,
        tG = null != (0, e7.om)(T.id);
    i.useEffect(
        () => () => {
            let e = (0, e7.Mk)(T.id);
            e?.phase === "recording" ? (0, eq.yx)(T.id) : e?.phase === "requesting" && (0, eq.eT)(T.id);
        },
        [T.id],
    );
    let tH = i.useRef(tG);
    i.useEffect(() => {
        (tH.current && !tG && ey.current?.focus(), (tH.current = tG));
    }, [tG]);
    let tq = null != P ? [X, tj].filter(Boolean).join(" ") : X,
        tZ = k.layout === td.wt.INLINE,
        tX = k.layout === td.wt.FLUSH,
        t0 = (0, l.jsx)("div", { ref: eS, className: e8.BW }),
        t1 = tT ? (0, l.jsx)(O, { align: "right", positionTargetRef: eS, channel: T }) : null,
        t2 =
            null != M
                ? M()
                : (0, l.jsx)(t9.A, {
                      type: k,
                      disabled: eB,
                      channel: T,
                      handleSubmit: e6,
                      isEmpty: tB,
                      showAllButtons: !eL && !eO,
                      expressionButtonsHidden: eO,
                  }),
        t5 = tD
            ? (0, l.jsx)(ne.A, {
                  type: k,
                  textValue: r,
                  className: Z,
                  maxCharacterCount: q,
                  showRemainingCharsAfterCount: $,
              })
            : null;
    return (
        i.useEffect(() => {
            j && e0._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: T.id });
        }, [j, T.id]),
        (0, l.jsx)(eg.Sv, {
            value: eY,
            children: (0, l.jsxs)(C.f5, {
                value: eu,
                children: [
                    tU && eH
                        ? (0, l.jsx)(no, { getSlateEditor: eI, onInsertEmoji: ta, type: k, channel: T })
                        : tU
                          ? (0, l.jsx)(nt.A, { ref: eb, getSlateEditor: eI, containerRef: eA, options: k.markdown })
                          : null,
                    (0, l.jsxs)("div", {
                        ref: ec,
                        className: s()(o, {
                            [e8.gM]: !0,
                            [e8.Bz]: tL && tD,
                            [e8.Qv]: tP && tD,
                            [e8.h9]: tw,
                            [e8.mr]: K,
                            [e8.Wn]: d.Fr,
                            [e8.Ls]: tZ,
                            [e8.AH]: tX,
                            [e8.z3]: null != _,
                        }),
                        children: [
                            tZ || tX ? null : (0, l.jsx)(t7, { bars: tW }),
                            (0, l.jsxs)("div", {
                                ref: eA,
                                onScroll: tf,
                                className: s()(c, { [e8.xx]: !0, [e8.k6]: !en, [e8.Ri]: tW.stacked.length > 0 }),
                                children: [
                                    (0, l.jsx)(tM, { channelId: T.id, chatInputType: k }),
                                    k.hideAttachmentArea
                                        ? null
                                        : (0, l.jsx)(t4.A, { channelId: T.id, type: k, canAttachFiles: eF }),
                                    (0, l.jsxs)("div", {
                                        className: s()(e8.vW, {
                                            [e8.mb]: tG,
                                            [e8.BF]: tw,
                                            [e8.RL]: k !== td.oU.EDIT && (null != tO || (tw && null == tO) || eD),
                                            [e8.fk]: k === td.oU.THREAD_CREATION,
                                            [e8.TZ]: k === td.oU.CREATE_FORUM_POST || k === td.oU.FORWARD_MESSAGE_INPUT,
                                            [e8.$i]: k === td.oU.USER_PROFILE_REPLY,
                                        }),
                                        onMouseDown: tb,
                                        children: [
                                            t1,
                                            tG
                                                ? (0, l.jsx)(e4, { channelId: T.id })
                                                : (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          tO,
                                                          (0, l.jsx)(p.vN, {
                                                              ringTarget: ec,
                                                              ringClassName: e8.Rg,
                                                              children: (0, l.jsx)(th.A, {
                                                                  ref: ey,
                                                                  id: f,
                                                                  focused: j,
                                                                  useSlate: ez,
                                                                  textValue: r,
                                                                  richValue: a,
                                                                  disabled: eB,
                                                                  placeholder: v,
                                                                  required: x,
                                                                  accessibilityLabel: N,
                                                                  isPreviewing: (eD || eW) && eK,
                                                                  channel: T,
                                                                  type: k,
                                                                  canPasteFiles: eF,
                                                                  uploadPromptCharacterCount: 4e3,
                                                                  maxCharacterCount: q ?? eQ,
                                                                  allowNewLines: Q,
                                                                  "aria-describedby": tq,
                                                                  onChange: e2,
                                                                  onResize: tg,
                                                                  onBlur: V,
                                                                  onFocus: W,
                                                                  onKeyDown: B,
                                                                  onSubmit: e3,
                                                                  onSubmitFailure: tk,
                                                                  onTab: tx,
                                                                  onEnter: tE,
                                                                  onSpace: tS,
                                                                  onMoveSelection: ty,
                                                                  onSelectionChanged: eJ,
                                                                  onMaybeShowAutocomplete: tt,
                                                                  onHideAutocomplete: tn,
                                                                  promptToUpload: G,
                                                                  fontSize: eZ,
                                                                  spellcheckEnabled: eX,
                                                                  canOnlyUseTextCommands: t_,
                                                                  className: s()(
                                                                      {
                                                                          [e8.QI]: k === td.oU.THREAD_CREATION,
                                                                          [e8.AV]: k === td.oU.PROFILE_BIO_INPUT,
                                                                          [e8.GR]: k === td.oU.OVERLAY_INLINE_REPLY,
                                                                      },
                                                                      h,
                                                                  ),
                                                                  "aria-labelledby": Y,
                                                                  showValueWhenDisabled: es,
                                                              }),
                                                          }),
                                                          t2,
                                                      ],
                                                  }),
                                            t0,
                                        ],
                                    }),
                                ],
                            }),
                            e$ ? null : (0, l.jsx)(ed, { ref: eh, channel: T, canOnlyUseTextCommands: t_ }),
                            (0, l.jsx)(ef.A, {
                                ref: e9,
                                channel: T,
                                canMentionRoles: H,
                                canMentionChannels: z,
                                useNewSlashCommands: ez,
                                canOnlyUseTextCommands: t_,
                                canSendStickers: k.stickers?.allowSending,
                                canSendSoundmoji: k.soundmoji?.allowSending,
                                textValue: r,
                                focused: j,
                                expressionPickerView: tC,
                                type: k,
                                targetRef: ec,
                                editorRef: ey,
                                onSendMessage: e3,
                                onSendSticker: to,
                                onVisibilityChange: tN,
                                editorScrollerRef: eA,
                                editorHeight: tp,
                                barsHeight: 40 * tW.floating.length,
                                setValue: (e, t) => e2?.(null, e, t),
                                position: ee,
                            }),
                            (0, l.jsx)(e_, { textValue: r, editorHeight: tp, channelId: T.id }),
                            t5,
                            et,
                        ],
                    }),
                    (0, l.jsx)(g.U, { error: _ }),
                    tA
                        ? null
                        : (0, l.jsx)(eE.A, {
                              positionTargetRef: ec,
                              type: k,
                              onSelectGIF: tr,
                              onSelectEmoji: ta,
                              onSelectSticker: to,
                              onSelectSound: tm,
                              channel: T,
                              closeOnModalOuterClick: el,
                              parentModalKey: ei,
                              position: "top",
                              align: "right",
                              positionLayerClassName: e8.BD,
                          }),
                ],
            }),
        })
    );
});
