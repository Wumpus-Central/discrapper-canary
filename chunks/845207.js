n.d(t, {
    C: () => nf,
    Sk: () => ny,
    Zx: () => nd,
    v7: () => nx,
    L0: () => nE,
    N_: () => np,
    MD: () => nA,
    Ay: () => nb,
    uW: () => nC,
    NO: () => nm,
    ck: () => nS,
    ml: () => ng,
    Vu: () => nh,
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
    m = n(17928),
    f = n(192308),
    p = n(559106),
    g = n(281595),
    x = n(465532),
    E = n(765671),
    S = n(775602),
    y = n(793574),
    A = n(688810),
    C = n(177640),
    b = n(989837),
    I = n(289873),
    v = n(268218),
    N = n(750506),
    T = n(60809),
    j = n(105292),
    _ = n(836555);
let k = { width: 500, height: T.$V },
    R = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("609019"),
                n.e("324732"),
                n.e("169727"),
                n.e("896691"),
                n.e("779367"),
                n.e("992956"),
                n.e("7452"),
                n.e("60002"),
                n.e("189423"),
                n.e("49742"),
                n.e("403382"),
                n.e("223849"),
                n.e("622936"),
                n.e("216947"),
                n.e("172727"),
                n.e("17094"),
                n.e("5257"),
                n.e("305210"),
                n.e("458098"),
                n.e("826744"),
                n.e("507528"),
                n.e("76428"),
                n.e("834552"),
                n.e("993103"),
                n.e("397270"),
                n.e("205596"),
                n.e("828111"),
                n.e("890027"),
                n.e("638221"),
                n.e("27773"),
                n.e("571210"),
                n.e("936320"),
                n.e("88342"),
                n.e("132191"),
                n.e("311802"),
                n.e("698965"),
                n.e("538887"),
                n.e("37977"),
                n.e("354044"),
                n.e("454625"),
                n.e("437065"),
                n.e("235313"),
                n.e("16954"),
                n.e("636373"),
                n.e("726033"),
                n.e("655708"),
                n.e("371133"),
                n.e("280854"),
                n.e("335395"),
                n.e("715038"),
                n.e("408362"),
                n.e("252229"),
                n.e("653849"),
                n.e("522261"),
                n.e("472289"),
                n.e("678195"),
                n.e("918024"),
                n.e("774021"),
                n.e("341701"),
                n.e("639163"),
                n.e("583518"),
                n.e("499118"),
                n.e("336611"),
                n.e("322094"),
                n.e("761764"),
                n.e("915086"),
                n.e("68974"),
                n.e("556385"),
                n.e("291220"),
                n.e("211584"),
                n.e("135621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, l.jsx)("div", { className: _.R4, style: k, children: (0, l.jsx)(I.y, {}) }),
    }),
    w = { height: T.$V },
    O = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: T.sK,
            children: (0, l.jsx)(N.nE, {
                className: _.T8,
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
                        className: _.V6,
                        role: "dialog",
                        style: w,
                        "aria-label": j.intl.string(j.t["3CNGLK"]),
                        children: t && (0, l.jsx)(R, { ...i }),
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
    V = n(666860),
    W = n(659280),
    F = n(579940),
    B = n(962125),
    K = n(915089),
    G = n(850992),
    H = n(887695),
    z = n(286509),
    q = n(721768),
    $ = n(842209),
    Q = n(210978),
    Z = n(392054),
    X = n(168186),
    J = n(866665),
    Y = n(939249),
    ee = n(88218),
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
                            (0, l.jsx)(J.m, {
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
                  store: G.LS,
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
        f = G.LS.useStore((e) => e.activeCategoryIndex);
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
            scrollDown: A,
            filterSection: C,
        } = $.cu({
            context: { channel: t, type: "channel" },
            filters: { commandTypes: [U.kc.CHAT], builtIns: n ? Q.n.ONLY_TEXT : Q.n.ALLOW, applicationCommands: !n },
            options: { placeholderCount: 7, limit: es.Hi, includeFrecency: !0 },
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
                    G.LS.setActiveCategoryIndex(e);
                }
            },
            scrollOffset: 20,
            searchQuery: "",
        });
    function I(e) {
        let t = g.length,
            n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!E;
        (E && e + 420 > 48 * t + 56 * n - 512 && A(), b(e), ec(), (o.current = e));
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
    let _ = i.useCallback(
            (e) => {
                e.id === y || e.id === es.Ik.FRECENCY ? (C(null), d.current?.scrollToSectionTop(0)) : C(e.id);
            },
            [C, y],
        ),
        k = i.useCallback(
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
                        k(n, l, (0, X.$S)(e.section));
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
        [S.length, x, E, p, k, u],
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
                                    message: j.intl.format(j.t.WoQXT6, { applicationName: i.name }),
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
                        onClick: () => k(r, a, (0, X.$S)(i.section)),
                        onHover: () => {
                            (c(null), m(!1));
                        },
                    },
                    s,
                );
            },
            [t, x, k, p, u],
        ),
        M = (0, K.GV)();
    return (
        (0, F.gf)(M, !0, (0, W.aI)(u)),
        i.useEffect(
            () => () => {
                (0, F.nQ)();
            },
            [],
        ),
        (0, l.jsxs)(W.Ay, {
            id: M,
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
                    onSectionClick: _,
                    applicationCommandListRef: d,
                }),
                (0, l.jsx)(B.A, {
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
var em = n(702841),
    ef = n(305070),
    ep = n(31498),
    eg = n(598071),
    ex = n(151271),
    eE = n(731325),
    eS = n(256265),
    ey = n(336807),
    eA = n(857071),
    eC = n(135621),
    eb = n(105330),
    eI = n(280450),
    ev = n(559908),
    eN = n(620141),
    eT = n(224964),
    ej = n(31408),
    e_ = n(536283);
function ek(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        r = i.useRef(n),
        s = (0, eb.l)({ editorHeight: t }),
        a = (0, eT.A)(),
        o = (0, m.bG)([ev.Ay, eI.default], () => ev.Ay.isComboing(eI.default.getId(), l)),
        u = s?.left ?? 0,
        c = (s?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== r.current && o && (a.fire(u, c, h ? { sprite: e_.dR } : null), (r.current = n));
        }, [n, o, u, c, h, a]),
        null
    );
}
function eR(e) {
    return (0, l.jsx)(eN.A, { confettiLocation: ej.k.CHAT_INPUT, children: (0, l.jsx)(ek, { ...e }) });
}
var ew = n(931664),
    eO = n(631576),
    eM = n(522602);
let eL = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    eP = /(\n|\t|\s)/g;
var eD = n(194004),
    eU = n(406704),
    eV = n(885386),
    eW = n(951260),
    eF = n(29080),
    eB = n(834730),
    eK = n(241326),
    eG = n(559647),
    eH = n(767089),
    ez = n(380629);
n(321073);
var eq = n(539451),
    e$ = n(264391),
    eQ = n(518950),
    eZ = n(115921);
function eX(e) {
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
                let n = new eq.A(t ? 0 : e);
                return (t && n.animateTo(e), { target: e, animator: n });
            }
            return (
                (l = requestAnimationFrame(function c(A) {
                    if (i) return;
                    let C = null == g ? 0 : Math.min(A - g, 100);
                    g = A;
                    let { clientWidth: b, clientHeight: I } = e;
                    ((e.width !== b * r || e.height !== I * r) && ((e.width = b * r), (e.height = I * r)),
                        n.clearRect(0, 0, e.width, e.height),
                        (n.fillStyle = window.getComputedStyle(e).color));
                    let v = (0, e$.yM)(t) ?? [];
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
                        for (p += C; p >= 48;) {
                            var T;
                            ((u += (N - u) * 0.45),
                                (T = u),
                                s.push(y(T, !h.current)),
                                s.length > a && s.splice(0, s.length - a),
                                (p -= 48));
                        }
                    else p = Math.min(48, p + C);
                    let j = e.width,
                        _ = e.height,
                        k = 6 * r,
                        R = 2 * r,
                        w = +r,
                        O = 24 * r,
                        M = 2 * r,
                        L = d.current && !h.current ? k * (1 - p / 48) : 0,
                        P = j - s.length * k + L;
                    !m.current || h.current ? ((x = null), (E = !1)) : null == x && (x = A);
                    let D = null == x ? null : A - x;
                    (null != D && D >= 100 && !E && ((E = !0), f.current()), n.beginPath());
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            l = h.current ? t.target : Math.max(0, t.animator.getCurrentValue()),
                            i = s.length > 1 ? (e / (s.length - 1)) * 40 : 0,
                            r = null == D ? 0 : Math.max(0, Math.min((D - i) / 60, 1)),
                            a = l * (1 - r * r) * (O - M) + M,
                            o = P + e * k,
                            u = (_ - a) / 2;
                        n.roundRect(o, u, R, a, w);
                    }
                    (n.fill(), (l = requestAnimationFrame(c)));
                })),
                () => {
                    ((i = !0), cancelAnimationFrame(l));
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: c, className: s()(eZ.J, n), "aria-hidden": !0 })
    );
}
var eJ = n(113494),
    eY = n(782134),
    e0 = n(745601),
    e1 = n(625494),
    e2 = n(587481),
    e5 = n(87466),
    e8 = n(698279),
    e6 = n(252433),
    e3 = n(495088);
function e7(e) {
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
                    e1._.dispatch(ea.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: t }),
                    e1._.subscribe(ea.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e1._.unsubscribe(ea.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
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
        A = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            Number.isFinite(t) && t > 0 && E(t);
        }, []),
        C = i.useCallback(() => {
            let e = o.current;
            (null != e && (e.currentTime = 0), g(0), c(!1), h(!1));
        }, []),
        b = i.useCallback(() => {
            (f(!1), p >= x && C());
        }, [p, x, C]),
        I = d ? Math.max(0, Math.ceil(x - p)) : Math.ceil(x),
        v = u ? eJ.PauseIcon : eY.PlayIcon,
        N = u ? j.intl.string(j.t["3XohGn"]) : j.intl.string(j.t.AlHqHT),
        T = u ? j.intl.string(j.t.ZcgDJX) : j.intl.string(j.t.RscU7I);
    return (0, l.jsxs)("div", {
        className: e6._W,
        children: [
            (0, l.jsx)(J.m, {
                text: T,
                children: (0, l.jsx)("div", {
                    className: s()(e8.VQ, e3.UD),
                    children: (0, l.jsx)(eH.A, { className: e3.x6, onClick: S, isActive: u, icon: v, "aria-label": N }),
                }),
            }),
            (0, l.jsx)(e5.A, {
                className: e6.ou,
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
                className: e6.RE,
                children: (0, l.jsx)(eB.E, {
                    variant: "text-sm/normal",
                    className: e6.O1,
                    tabularNumbers: !0,
                    children: (0, ez.rB)(I),
                }),
            }),
            (0, l.jsx)(e0.A, {
                ref: o,
                className: e6.Zn,
                controls: !1,
                preload: "metadata",
                onEnded: C,
                onLoadedMetadata: A,
                onError: () => c(!1),
                volume: (0, e2.v1)(),
                playing: u && !m,
                children: (0, l.jsx)("source", { src: n.src }),
            }),
        ],
    });
}
var e4 = n(709372),
    e9 = n(984680);
let te = i.memo(function (e) {
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
        })(o ? ((t = 1e3 * c) >= eQ.Uu ? "imminent" : t >= eQ.Y_ ? "approaching" : "none") : "none", d),
        f = u ? a?.recordedPlayback : void 0,
        [p, g] = i.useState(!1),
        [x, E] = i.useState(f),
        y = p && !d && null != f;
    i.useEffect(() => {
        u && p && (null == document.activeElement || document.activeElement === document.body) && r.current?.focus();
    }, [p, u]);
    let A = i.useCallback(() => {
            null != f && E(f);
        }, [f]),
        C = i.useCallback(() => {
            (0, e$.nM)(n) && g(!0);
        }, [n]),
        b = i.useCallback(() => {
            o ? (0, e$.$G)(n) : u && (0, e$.SC)(n);
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
        _ = y && null == T;
    return (0, l.jsxs)("div", {
        className: e9.M0,
        role: "group",
        "aria-label": j.intl.string(j.t.lwy6aX),
        children: [
            null != T
                ? (0, l.jsx)(e7, { playback: T, durationSecs: a.recordedDurationSecs ?? 0, animateWaveformEntrance: y })
                : (0, l.jsxs)("div", {
                      className: e9.Fg,
                      children: [
                          o
                              ? (0, l.jsx)(J.m, {
                                    text: j.intl.string(j.t.hHBkuG),
                                    children: (0, l.jsx)("div", {
                                        className: s()(e8.VQ, e3.UD),
                                        children: (0, l.jsx)(eH.A, {
                                            className: e3.x6,
                                            onClick: C,
                                            isActive: !1,
                                            icon: eF.w,
                                            "aria-label": j.intl.string(j.t["cmFRF+"]),
                                        }),
                                    }),
                                })
                              : null,
                          (0, l.jsx)(eX, {
                              channelId: n,
                              className: e9.ou,
                              recording: o,
                              reducedMotion: d,
                              collapsing: _,
                              onCollapseComplete: A,
                          }),
                          (0, l.jsxs)("div", {
                              className: e9.RE,
                              children: [
                                  (0, l.jsx)("div", { className: s()(e9.Zz, { [e9.Py]: !o }), "aria-hidden": !0 }),
                                  (0, l.jsx)(eB.E, {
                                      variant: "text-sm/normal",
                                      className: s()(e9.O1, { [e9.w2]: h }),
                                      tabularNumbers: !0,
                                      children: (0, ez.rB)(v),
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, l.jsx)("div", { className: e9.yF, "aria-hidden": !0 }),
            (0, l.jsx)(J.m, {
                text: j.intl.string(j.t.oyYWHE),
                children: (0, l.jsx)("div", {
                    className: s()(e8.VQ, e3.UD),
                    children: (0, l.jsx)(eH.A, {
                        className: e3.x6,
                        onClick: () => (0, e$.eT)(n),
                        isActive: !1,
                        icon: eK.TrashIcon,
                        "aria-label": j.intl.string(j.t.RdK9sV),
                    }),
                }),
            }),
            (0, l.jsx)(J.m, {
                text: j.intl.string(j.t.TXNS7S),
                children: (0, l.jsx)("div", {
                    className: s()(e8.VQ, e3.UD),
                    onKeyDown: I,
                    children: (0, l.jsx)(eH.A, {
                        ref: r,
                        className: e9.jo,
                        childClassName: s()(e9.Jp, { [e9.Tq]: !N }),
                        onClick: N ? b : void 0,
                        disabled: !N,
                        noHover: !N,
                        isActive: !1,
                        "aria-label": j.intl.string(j.t["+8GStU"]),
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
var tt = n(696451),
    tn = n(576705),
    tl = n(309010),
    ti = n(638128),
    tr = n(287809),
    ts = n(821102),
    ta = n(174459),
    to = n(234320),
    tu = n(488926),
    tc = n(723702),
    td = n(486319),
    th = n(355622),
    tm = n(392553),
    tf = n(140735),
    tp = n(176781),
    tg = n(463930),
    tx = n(935063),
    tE = n(73392),
    tS = n(650019),
    ty = n(763754),
    tA = n(967144),
    tC = n(118517),
    tb = n(976860),
    tI = n(747926),
    tv = n(232835),
    tN = n(285796),
    tT = n(595347);
function tj(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Y.D, {
        className: tT.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(tN.a, { size: "md", color: "currentColor", className: tT.u }),
    });
}
var t_ = n(558497);
let tk = "channel-reply-bar-a11y-description";
function tR(e) {
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
                ((0, tC.Jx)(t.id), (0, tI.Tv)(t, n, "Reply Chain Nudge"));
            },
            className: t_._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(eB.E, {
                    color: "text-default",
                    className: t_.Qq,
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.B3V0FM, { count: Math.min(10, r + 1) }),
                }),
                (0, l.jsx)(eB.E, {
                    color: "text-link",
                    className: t_.NG,
                    variant: "text-sm/semibold",
                    children: j.intl.string(j.t.rBIGBL),
                }),
            ],
        })
    );
}
function tw(e) {
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
        } = (0, ty.Ay)(u),
        A = (0, tA.gn)(f, S, x),
        C = (0, tE.a)({ displayNameStyles: y }),
        b = (0, tS.A)(h, u.attachments),
        I =
            ((t = o.id),
            (n = u.id),
            (0, m.bG)(
                [tv.A],
                () => {
                    let e = n;
                    for (let n = 0; n < 10; n++) {
                        let l = tv.A.getMessage(t, e);
                        if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                        e = l.messageReference.message_id;
                    }
                    return 10;
                },
                [t, n],
            )),
        v = (0, eU.n)(o, u),
        N = a.showThreadPromptOnReply && I >= 2 && v;
    return (0, l.jsx)("div", {
        className: t_.e1,
        children: (0, l.jsxs)("div", {
            className: t_.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: t_.eU,
                    children: [
                        (0, l.jsx)(tf.A, { id: tk, children: j.intl.formatToPlainString(j.t.EpJL4E, { username: p }) }),
                        (0, l.jsx)(Y.D, {
                            onClick: function () {
                                return (0, tb.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(eB.E, {
                                color: "text-default",
                                className: s()(t_.Qq, t_.Fn),
                                variant: "text-sm/normal",
                                children: j.intl.format(j.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    b?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: t_.H8,
                                                              children: [
                                                                  b.isClip &&
                                                                      (0, l.jsx)(tp.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: t_.gS,
                                                                      }),
                                                                  (0, l.jsx)(eB.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: t_.NV,
                                                                      children: b.title,
                                                                  }),
                                                                  (0, l.jsxs)(eB.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", b.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(tg.g, {
                                                              className: t_.UU,
                                                              name: p,
                                                              colorString: g,
                                                              colorStrings: A,
                                                              roleName: E,
                                                              displayNameStylesFont: C,
                                                          }),
                                                ],
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: t_.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(J.m, {
                                                asContainer: !0,
                                                text: c ? j.intl.string(j.t.DH2o6R) : j.intl.string(j.t.utGGIY),
                                                children: (0, l.jsx)(Y.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        (e.stopPropagation(), (0, tC.vz)(o.id, !c));
                                                    },
                                                    children: (0, l.jsxs)(eB.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: t_.Z4,
                                                        children: [
                                                            (0, l.jsx)(tx.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": j.intl.string(j.t.P8tvKG),
                                                                className: t_.mM,
                                                            }),
                                                            c ? j.intl.string(j.t.p9jC2r) : j.intl.string(j.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: t_.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(tj, {
                                    onClick: function (e) {
                                        (e.stopPropagation(), (0, tC.Jx)(o.id));
                                    },
                                    "aria-label": j.intl.string(j.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                N && (0, l.jsx)(tR, { channel: o, message: u, replyChainLength: I }),
            ],
        }),
    });
}
var tO = n(749314),
    tM = n(148355),
    tL = n(218782);
let tP = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [r, s] = i.useState(null),
        a = (0, m.bG)([ew.A], () => ew.A.getStickerPreview(t, n.drafts.type));
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
                                      (0, l.jsx)(Y.D, {
                                          onFocus: () => s(e.id),
                                          onBlur: () => s(null),
                                          className: tL.b,
                                          "aria-label": j.intl.formatToPlainString(j.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eO.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: tL.Nk,
                                              children: (0, l.jsx)(tN.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tL.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(tM.A, {
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
                  (0, l.jsx)(tO.A, { className: tL.R }),
              ],
          })
        : null;
});
var tD = n(612394),
    tU = n(442433);
n(827669);
var tV = n(811559);
function tW(e) {
    let t,
        r,
        a,
        { className: o, activeCommand: u, activeOption: c, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tU.L3)(e, async () => {
                          let { default: e } = await Promise.all([n.e("638221"), n.e("715687")]).then(
                              n.bind(n, 646938),
                          );
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: j.intl.string(j.t.oJ1Muw) });
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
        className: s()(o, tV.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tV.iz,
                children: [
                    (0, l.jsx)(eB.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != a
                        ? (0, l.jsx)("span", { className: tV.z3, children: a })
                        : (0, l.jsx)("span", { className: tV.h_, children: r }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tV.o1,
                children: (0, l.jsx)(tj, { onClick: f, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tF = n(73153),
    tB = n(734057);
let tK = new Set();
class tG extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        (this.waitFor(tB.A, tt.Ay, tl.Ay, tr.default), null != e && (tK = new Set(e)));
    }
    hasId(e) {
        return tK.has(e);
    }
    getState() {
        return [...tK];
    }
}
let tH = new tG(tF.h, {});
function tz() {
    let e = tl.Ay.getChannelId();
    if (null == e) return;
    let t = tB.A.getChannel(e);
    null != t && t.isPrivate() && (tK.has(t.getRecipientId()) || (tK.add(t.getRecipientId()), tH.emitChange()));
}
function tq() {
    return (0, l.jsxs)("div", {
        className: t_.eU,
        children: [
            (0, l.jsx)(eB.E, {
                variant: "text-sm/medium",
                className: s()(t_.Qq, t_.Fn),
                children: j.intl.string(j.t["2UvR1E"]),
            }),
            (0, l.jsx)("div", {
                className: t_.o1,
                children: (0, l.jsx)(tj, { onClick: tz, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var t$ = n(541188);
function tQ(e) {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: t$.M,
        children: [
            (0, l.jsx)(eB.E, { variant: "text-xs/bold", color: "text-strong", children: j.intl.string(j.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(eB.E, { variant: "text-xs/medium", className: t$.z, children: j.intl.string(j.t.qNorwt) })
                : (0, l.jsx)(eB.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: j.intl.string(j.t["260qZS"]),
                  }),
        ],
    });
}
var tZ = n(25201),
    tX = n(926321),
    tJ = n(399482);
function tY(e) {
    var t, n;
    let { channelId: i } = e,
        r = (0, tZ.vR)(i);
    if (null == r) return null;
    let a = r.rolling,
        o =
            ((t = a),
            (n = r.results),
            t
                ? j.intl.string(j.t["x/FIRX"])
                : null == n
                  ? ""
                  : j.intl.formatToPlainString(j.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: s()(tJ.kL, { [tJ.Kd]: !r.dismissing }),
        children: (0, l.jsxs)("div", {
            className: tJ.Qs,
            children: [
                (0, l.jsx)(tX.DiceIcon, { size: "md", className: s()({ [tJ.su]: a }) }),
                (0, l.jsx)(eB.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var t0 = n(575293),
    t1 = n(536637),
    t2 = n.n(t1),
    t5 = n(31717),
    t8 = n(551640),
    t6 = n(970244),
    t3 = n(29621);
function t7(e) {
    let { channel: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: i } = n;
    return (0, l.jsx)("div", {
        className: t3.e1,
        children: (0, l.jsx)("div", {
            className: t3.kL,
            children: (0, l.jsxs)("div", {
                className: t3.g3,
                children: [
                    (0, l.jsx)(Y.D, {
                        className: t3.a3,
                        "aria-label": j.intl.string(j.t.SBcdAN),
                        onClick: function () {
                            (0, t6.e0)({
                                channel: t,
                                defaultValue: t2()(i),
                                entryPoint: t8.t.COMPOSER_BAR,
                                isEditing: !0,
                            });
                        },
                        children: (0, l.jsx)(eB.E, {
                            color: "text-default",
                            className: t3.Qq,
                            variant: "text-sm/normal",
                            children: j.intl.formatToPlainString(j.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: t3.o1,
                        children: (0, l.jsx)(tj, {
                            onClick: function (e) {
                                (e.stopPropagation(), x.A.clearDraft(t.id, t5.C.ScheduledMessage));
                            },
                            "aria-label": j.intl.string(j.t.cpT0Cq),
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
                  r.length > 0 && (0, l.jsx)("div", { className: e3.Vq, children: r }),
                  n.length > 0 && (0, l.jsx)("div", { className: e3.MD, children: n }),
              ],
          });
}
var t9 = n(795541),
    ne = n(822610),
    nt = n(625928),
    nn = n(135261),
    nl = n(820066),
    ni = n(265872),
    nr = n(375499),
    ns = n(90295),
    na = n(307731),
    no = n(9287);
function nu(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: r, channel: s } = e,
        a = t(),
        o = i.useRef(null);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: no.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: no.Wy,
                      children: (0, l.jsx)(nn.P, {
                          slateEditor: a,
                          options: r.markdown,
                          iconClassName: no.C7,
                          dividerClassName: no.us,
                      }),
                  }),
                  (0, l.jsx)(ni.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(ns.A, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: l, willClose: i } = e;
                                  (n({ emoji: l, willClose: i }), i && t());
                              },
                              pickerIntention:
                                  r.expressionPicker?.emojiIntention ?? na.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: ni.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(nr.A, { ...e, ref: o, active: n, className: no.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var nc = n(263582);
function nd(e, t, r, s, a) {
    let [o, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, h, m, p, g) => {
                if (o) return;
                u(!0);
                let E = ew.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    S = eM.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !p && (0, eS.xz)(S, a)) {
                    (u(!1),
                        (0, f.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("686889"),
                                n.e("786830"),
                                n.e("18146"),
                                n.e("560570"),
                                n.e("896691"),
                                n.e("779367"),
                                n.e("992956"),
                                n.e("7452"),
                                n.e("60002"),
                                n.e("189423"),
                                n.e("77413"),
                                n.e("169727"),
                                n.e("267526"),
                                n.e("669174"),
                                n.e("967062"),
                                n.e("377016"),
                                n.e("17256"),
                                n.e("374962"),
                                n.e("649500"),
                                n.e("683426"),
                                n.e("524434"),
                                n.e("849162"),
                                n.e("229511"),
                                n.e("726399"),
                                n.e("599660"),
                                n.e("452880"),
                                n.e("249681"),
                                n.e("76428"),
                                n.e("481647"),
                                n.e("776602"),
                                n.e("704434"),
                                n.e("205596"),
                                n.e("140402"),
                                n.e("828111"),
                                n.e("890027"),
                                n.e("21921"),
                                n.e("139970"),
                                n.e("179049"),
                                n.e("693832"),
                                n.e("193158"),
                                n.e("294857"),
                                n.e("179745"),
                                n.e("455924"),
                                n.e("803332"),
                                n.e("818465"),
                                n.e("432209"),
                                n.e("250478"),
                                n.e("979630"),
                                n.e("858337"),
                                n.e("97210"),
                                n.e("356296"),
                                n.e("968763"),
                                n.e("118917"),
                                n.e("562168"),
                                n.e("935948"),
                                n.e("126437"),
                                n.e("24922"),
                                n.e("898377"),
                                n.e("698547"),
                                n.e("24889"),
                                n.e("951893"),
                                n.e("647177"),
                                n.e("702813"),
                                n.e("98972"),
                                n.e("431649"),
                                n.e("964320"),
                                n.e("836150"),
                                n.e("699011"),
                                n.e("472789"),
                                n.e("827335"),
                                n.e("508371"),
                                n.e("150200"),
                                n.e("333097"),
                                n.e("412743"),
                                n.e("710014"),
                                n.e("486155"),
                                n.e("335986"),
                                n.e("386861"),
                                n.e("777848"),
                                n.e("770961"),
                                n.e("623685"),
                                n.e("842516"),
                                n.e("684688"),
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
                        (a !== tl.Ay.getChannelId()
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
function nh(e, t, n) {
    return i.useCallback(
        (l, i) => {
            if (i?.shiftKey === !0 || t === th.oU.CREATE_FORUM_POST || t === th.oU.CREATE_ANNOUNCEMENT_POST)
                n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? ey.jQ,
                    load_id: ts.A.getAnalyticsID(),
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
function nm(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            (null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, ex.v8)());
        },
        [e],
    );
}
function nf(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: r, chatInputType: s, submit: a } = e,
        { analyticsLocations: o } = (0, A.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (s === th.oU.CREATE_ANNOUNCEMENT_POST ||
                s === th.oU.CREATE_FORUM_POST ||
                (function (e, t, n, l) {
                    if (eM.A.getUploadCount(n, l) > 0) return !0;
                    let i = ew.A.getStickerPreview(n, l);
                    if (null != i && i.length > 0) return !0;
                    switch (e) {
                        case eD.D6.STICKER_PICKER:
                            return "" !== t.trim();
                        case eD.D6.AUTOCOMPLETE:
                            var r;
                            return (
                                (null == (r = t) ? [] : r.replace(eL, "").replace(eP, " ").trim().split(" ")).length > 1
                            );
                        case eD.D6.BUILT_IN_INTEGRATION:
                        default:
                            return !1;
                    }
                })(i, l, r, s.drafts.type)
                    ? ((0, tD.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != ew.A.getStickerPreview(r, s.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eO.$x)(r, e, s.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ex.v8)(),
                t.current?.focus());
        },
        [n, l, r, t, o, a, s],
    );
}
function np(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, ex.r$)(e8.kx.EMOJI, e, n);
        }, [t, e, n]),
        r = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ex.r$)(e8.kx.GIF, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ex.r$)(e8.kx.STICKER, e, n);
        }, [t, e, n]);
    ((0, to.Vo)({ event: ea.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, to.Vo)({ event: ea.jej.TOGGLE_GIF_PICKER, handler: r }),
        (0, to.Vo)({ event: ea.jej.TOGGLE_STICKER_PICKER, handler: s }));
}
function ng(e, t, n) {
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
function nx() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nE(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nS(e) {
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
function ny(e, t, n, l) {
    let i = e.getGuildId(),
        r = (0, m.bG)([eA.A], () => null != i && eA.A.isLurking(i), [i]),
        s = (0, m.bG)([tt.Ay, tr.default], () => {
            let e = tr.default.getCurrentUser();
            return (null != i && null != e ? tt.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)(
            [tn.A],
            () => {
                let i = e.isPrivate(),
                    r = tn.A.computePermissions(e),
                    a = h.zy(r, ea.xBc.CREATE_PUBLIC_THREADS) || h.zy(r, ea.xBc.CREATE_PRIVATE_THREADS),
                    o =
                        (!t.permissions?.requireCreateTherads || a) &&
                        (!t.permissions?.requireSendMessages || h.zy(r, ea.xBc.SEND_MESSAGES)),
                    u = o && h.zy(r, ea.xBc.ATTACH_FILES),
                    c = null != n,
                    d = (0, eU.UJ)(e);
                return {
                    disabled: l || s || (!i && !o) || d,
                    canAttachFiles: !0 === t.attachments && (i || s || u || c),
                    canCreateThreads: a,
                    canEveryoneSendMessages: tu.MJ(ea.xBc.SEND_MESSAGES, e),
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, s],
        );
    return { isLurking: r, isPendingMember: s, ...a };
}
function nA(e, t, n) {
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
let nb = i.memo(function (e) {
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
            type: j,
            focused: _,
            error: k,
            renderAttachButton: R,
            renderApplicationCommandIcon: w,
            renderButtons: L,
            pendingReply: P,
            onChange: D,
            onResize: U,
            onBlur: V,
            onFocus: W,
            onKeyDown: F,
            onSubmit: B,
            promptToUpload: K,
            highlighted: G,
            canMentionRoles: H,
            canMentionChannels: z,
            maxCharacterCount: q,
            showRemainingCharsAfterCount: $,
            allowNewLines: Q = !0,
            characterCountClassName: Z,
            "aria-describedby": X,
            "aria-labelledby": J,
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
    u()(null != j, "chat input type must be set");
    let { analyticsLocations: eu } = (0, A.Ay)(y.A.CHANNEL_TEXT_AREA),
        ec = nE(eo),
        eh = i.useRef(null),
        eS = i.useRef(null),
        ey = i.useRef(null),
        eA = i.useRef(null),
        eb = i.useRef(null),
        eI = i.useCallback(() => ey.current?.getSlateEditor() ?? null, []);
    Y?.(ey.current);
    let ev = (0, C.A)(T),
        eN = (0, eW.n)("ChannelTextAreaContainer"),
        eT = (0, m.cf)([S.Ay], () => ({
            expressionPickerFormat: S.Ay.expressionPickerFormat,
            condensePickerWhenNarrow: S.Ay.condensePickerWhenNarrow,
        })),
        ej = eN ? eT.expressionPickerFormat : S.IG.FLEXIBLE,
        e_ = !eN || eT.condensePickerWhenNarrow,
        [ek, ew] = i.useState(!ev);
    (0, E.i4)(ec, (e) => {
        let { width: t } = e;
        return ew(!ev && (null == t || t > 450));
    });
    let eO = ej === S.IG.HIDDEN,
        eM = ej === S.IG.CONDENSED || (ej === S.IG.FLEXIBLE && e_ && !ek),
        { activeCommand: eL, activeCommandSection: eP } = (0, m.cf)([M.A], () => ({
            activeCommand: j.commands?.enabled ? M.A.getActiveCommand(T.id) : null,
            activeCommandSection: j.commands?.enabled ? M.A.getActiveCommandSection(T.id) : null,
        })),
        {
            isLurking: eD,
            isPendingMember: eU,
            disabled: eF,
            canAttachFiles: eB,
            canCreateThreads: eK,
            canEveryoneSendMessages: eG,
        } = ny(T, j, eL, I),
        eH = j.toolbarType === th.O1.STATIC,
        ez = !eV.D_.useSetting() && !(0, tc.isAndroidWeb)() && null != window.ResizeObserver,
        eq = !ez || !j.commands?.enabled || !_ || "/" !== r,
        eQ = (0, eC.A)(),
        { fontSize: eZ } = (0, m.cf)([S.Ay], () => ({ fontSize: S.Ay.fontSize })),
        eX = (0, m.bG)([ti.A], () => ti.A.isEnabled());
    np(j, eF, T.id);
    let { eventEmitter: eJ, handleEditorSelectionChanged: eY } = ng(ey, r, a),
        e0 = i.useRef(r);
    e0.current = r;
    let e2 = i.useCallback(
            (e, t, n) => {
                ("/" === t && "" === e0.current && j.commands?.enabled && eJ.emit("command-sentinel-typed"),
                    D?.(e, t, n));
            },
            [D, j.commands?.enabled, eJ],
        ),
        { submitting: e5, submit: e8, handleSubmit: e6 } = nd(B, j, ey, eb, T.id),
        { autocompleteRef: e7, handleMaybeShowAutocomplete: e9, handleHideAutocomplete: tn } = nx(),
        tl = nh(e8, j, ey),
        ts = nm(ey),
        to = nf({ editorRef: ey, disabled: eF, textValue: r, channelId: T.id, chatInputType: j, submit: B }),
        tu = i.useCallback(
            (e, t, n) => {
                let l = ey.current;
                (null != e &&
                    null != l &&
                    (ta.default.track(ea.HAw.SOUNDMOJI_SELECT, {
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
        { editorHeight: tp, handleResize: tg } = nS(U),
        {
            handleTab: tx,
            handleEnter: tE,
            handleSpace: tS,
            handleMoveSelection: ty,
        } = ((t = i.useCallback(
            () => !!(!eq && eh.current?.onTabOrEnter(!1)) || e7.current?.onTabOrEnter(!1) || !1,
            [eq, eh, e7],
        )),
        (n = i.useCallback(
            () => !!(!eq && eh.current?.onTabOrEnter(!0)) || e7.current?.onTabOrEnter(!0) || !1,
            [eq, eh, e7],
        )),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => e7.current?.onSpace() || !1, [e7]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!eq && eh.current?.onMoveSelection(e)) || e7.current?.onMoveSelection(e) || !1,
                [eq, eh, e7],
            ),
        }),
        { expressionPickerView: tA, shouldHideExpressionPicker: tC, handleOuterClick: tb } = nA(j, ey, T.id),
        { selectedAutocompleteInputType: tI, selectedAutocompleteInputError: tv } = (function (e, t) {
            let [n, l] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                r = i.useCallback(() => {
                    let e,
                        n = t.current?.getSlateEditor();
                    (null != n && (e = nl.VW.getSelectedParentOfType(n, ep.mk)?.[0]),
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
        })(eJ, ey),
        { handleAutocompleteVisibilityChange: tN } = nC(j, T.id),
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
        })({ type: j, channelId: T.id }),
        tj = i.useCallback(() => {
            eJ.emit("submit-failure");
        }, [eJ]);
    (0, td.R)(eJ, T.guild_id, T.id);
    let t_ = null != P,
        tR = (eF && !((eD || eU) && eG)) || (e5 && j.submit?.useDisabledStylesOnSubmit),
        tO = null;
    null != eL ? (tO = w?.(eL, eP, e3.g$)) : (!eF || eK) && (tO = R?.(t_, e3.g$));
    let { isVisible: tM, showsUpsell: tL } = (0, nc.A)({
            type: j,
            textValue: r,
            maxCharacterCount: q,
            showRemainingCharsAfterCount: $,
        }),
        tD = ez && null != a && !eF && j.showCharacterCount && null == eL,
        tU = ez && !__OVERLAY__ && null != a && null == eL && j.toolbarType !== th.O1.NONE && !eF,
        tV = (function (e) {
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
                h = (0, m.bG)([tt.Ay, tr.default, tH], () => {
                    let e = tr.default.getCurrentUser();
                    if (null == e || !e.isStaff() || !t.isDM()) return !1;
                    let n = tr.default.getUser(t.getRecipientId());
                    if (!n?.isStaff()) return !1;
                    let l = tt.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                    return l ? !tH.hasId(n.id) && l : (tK.delete(n.id) && tH.emitChange(), !1);
                }),
                f = (0, tZ.Ay)((e) => e.channelId === t.id);
            return i.useMemo(() => {
                let e = [],
                    i = [];
                return (
                    null != t.guild_id &&
                        n === th.oU.NORMAL &&
                        i.push((0, l.jsx)(t0.A, { guildId: t.guild_id, channel: t, className: e3.UW })),
                    null != r &&
                        e.push(
                            (0, l.jsx)(tW, {
                                activeCommand: r,
                                activeOption: c ?? null,
                                optionStates: d,
                                channelId: t.id,
                            }),
                        ),
                    null != s && e.push((0, l.jsx)(tw, { reply: s, chatInputType: n })),
                    h && e.push((0, l.jsx)(tq, {})),
                    null != a && e.push((0, l.jsx)(t7, { channel: t, scheduledMessageDraft: a })),
                    "timestampMentionInput" === o && i.push((0, l.jsx)(tQ, { error: u ?? !1 })),
                    f && e.push((0, l.jsx)(tY, { channelId: t.id })),
                    { stacked: e, floating: i }
                );
            }, [r, c, d, t, f, s, h, n, a, o, u]);
        })({
            channel: T,
            type: j,
            activeCommand: eL,
            pendingReply: P,
            scheduledMessageDraft: er,
            selectedAutocompleteInputType: tI,
            selectedAutocompleteInputError: tv,
        }),
        tF = 0 === r.trim().length,
        tB = null != (0, e4.om)(T.id);
    i.useEffect(
        () => () => {
            let e = (0, e4.Mk)(T.id);
            e?.phase === "recording" ? (0, e$.yx)(T.id) : e?.phase === "requesting" && (0, e$.eT)(T.id);
        },
        [T.id],
    );
    let tG = i.useRef(tB);
    i.useEffect(() => {
        (tG.current && !tB && ey.current?.focus(), (tG.current = tB));
    }, [tB]);
    let tz = null != P ? [X, tk].filter(Boolean).join(" ") : X,
        t$ = j.layout === th.wt.INLINE,
        tX = j.layout === th.wt.FLUSH,
        tJ = (0, l.jsx)("div", { ref: eS, className: e3.BW }),
        t1 = tT ? (0, l.jsx)(O, { align: "right", positionTargetRef: eS, channel: T }) : null,
        t2 =
            null != L
                ? L()
                : (0, l.jsx)(t9.A, {
                      type: j,
                      disabled: eF,
                      channel: T,
                      handleSubmit: e6,
                      isEmpty: tF,
                      showAllButtons: !eM && !eO,
                      expressionButtonsHidden: eO,
                  }),
        t5 = tD
            ? (0, l.jsx)(nt.A, {
                  type: j,
                  textValue: r,
                  className: Z,
                  maxCharacterCount: q,
                  showRemainingCharsAfterCount: $,
              })
            : null;
    return (
        i.useEffect(() => {
            _ && e1._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: T.id });
        }, [_, T.id]),
        (0, l.jsx)(eg.Sv, {
            value: eJ,
            children: (0, l.jsxs)(A.f5, {
                value: eu,
                children: [
                    tU && eH
                        ? (0, l.jsx)(nu, { getSlateEditor: eI, onInsertEmoji: ts, type: j, channel: T })
                        : tU
                          ? (0, l.jsx)(nn.A, { ref: eb, getSlateEditor: eI, containerRef: eA, options: j.markdown })
                          : null,
                    (0, l.jsxs)("div", {
                        ref: ec,
                        className: s()(o, {
                            [e3.gM]: !0,
                            [e3.Bz]: tM && tD,
                            [e3.Qv]: tL && tD,
                            [e3.h9]: tR,
                            [e3.mr]: G,
                            [e3.Wn]: d.Fr,
                            [e3.Ls]: t$,
                            [e3.AH]: tX,
                            [e3.z3]: null != k,
                        }),
                        children: [
                            t$ || tX ? null : (0, l.jsx)(t4, { bars: tV }),
                            (0, l.jsxs)("div", {
                                ref: eA,
                                onScroll: tf,
                                className: s()(c, { [e3.xx]: !0, [e3.k6]: !en, [e3.Ri]: tV.stacked.length > 0 }),
                                children: [
                                    (0, l.jsx)(tP, { channelId: T.id, chatInputType: j }),
                                    j.hideAttachmentArea
                                        ? null
                                        : (0, l.jsx)(ne.A, { channelId: T.id, type: j, canAttachFiles: eB }),
                                    (0, l.jsxs)("div", {
                                        className: s()(e3.vW, {
                                            [e3.mb]: tB,
                                            [e3.BF]: tR,
                                            [e3.RL]: j !== th.oU.EDIT && (null != tO || (tR && null == tO) || eD),
                                            [e3.fk]: j === th.oU.THREAD_CREATION,
                                            [e3.TZ]: j === th.oU.CREATE_FORUM_POST || j === th.oU.FORWARD_MESSAGE_INPUT,
                                            [e3.$i]: j === th.oU.USER_PROFILE_REPLY,
                                        }),
                                        onMouseDown: tb,
                                        children: [
                                            t1,
                                            tB
                                                ? (0, l.jsx)(te, { channelId: T.id })
                                                : (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          tO,
                                                          (0, l.jsx)(p.vN, {
                                                              ringTarget: ec,
                                                              ringClassName: e3.Rg,
                                                              children: (0, l.jsx)(tm.A, {
                                                                  ref: ey,
                                                                  id: f,
                                                                  focused: _,
                                                                  useSlate: ez,
                                                                  textValue: r,
                                                                  richValue: a,
                                                                  disabled: eF,
                                                                  placeholder: v,
                                                                  required: x,
                                                                  accessibilityLabel: N,
                                                                  isPreviewing: (eD || eU) && eG,
                                                                  channel: T,
                                                                  type: j,
                                                                  canPasteFiles: eB,
                                                                  uploadPromptCharacterCount: ea.CS1,
                                                                  maxCharacterCount: q ?? eQ,
                                                                  allowNewLines: Q,
                                                                  "aria-describedby": tz,
                                                                  onChange: e2,
                                                                  onResize: tg,
                                                                  onBlur: V,
                                                                  onFocus: W,
                                                                  onKeyDown: F,
                                                                  onSubmit: e8,
                                                                  onSubmitFailure: tj,
                                                                  onTab: tx,
                                                                  onEnter: tE,
                                                                  onSpace: tS,
                                                                  onMoveSelection: ty,
                                                                  onSelectionChanged: eY,
                                                                  onMaybeShowAutocomplete: e9,
                                                                  onHideAutocomplete: tn,
                                                                  promptToUpload: K,
                                                                  fontSize: eZ,
                                                                  spellcheckEnabled: eX,
                                                                  canOnlyUseTextCommands: t_,
                                                                  className: s()(
                                                                      {
                                                                          [e3.QI]: j === th.oU.THREAD_CREATION,
                                                                          [e3.AV]: j === th.oU.PROFILE_BIO_INPUT,
                                                                          [e3.GR]: j === th.oU.OVERLAY_INLINE_REPLY,
                                                                      },
                                                                      h,
                                                                  ),
                                                                  "aria-labelledby": J,
                                                                  showValueWhenDisabled: es,
                                                              }),
                                                          }),
                                                          t2,
                                                      ],
                                                  }),
                                            tJ,
                                        ],
                                    }),
                                ],
                            }),
                            eq ? null : (0, l.jsx)(ed, { ref: eh, channel: T, canOnlyUseTextCommands: t_ }),
                            (0, l.jsx)(ef.A, {
                                ref: e7,
                                channel: T,
                                canMentionRoles: H,
                                canMentionChannels: z,
                                useNewSlashCommands: ez,
                                canOnlyUseTextCommands: t_,
                                canSendStickers: j.stickers?.allowSending,
                                canSendSoundmoji: j.soundmoji?.allowSending,
                                textValue: r,
                                focused: _,
                                expressionPickerView: tA,
                                type: j,
                                targetRef: ec,
                                editorRef: ey,
                                onSendMessage: e8,
                                onSendSticker: to,
                                onVisibilityChange: tN,
                                editorScrollerRef: eA,
                                editorHeight: tp,
                                barsHeight: 40 * tV.floating.length,
                                setValue: (e, t) => e2?.(null, e, t),
                                position: ee,
                            }),
                            (0, l.jsx)(eR, { textValue: r, editorHeight: tp, channelId: T.id }),
                            t5,
                            et,
                        ],
                    }),
                    (0, l.jsx)(g.U, { error: k }),
                    tC
                        ? null
                        : (0, l.jsx)(eE.A, {
                              positionTargetRef: ec,
                              type: j,
                              onSelectGIF: tl,
                              onSelectEmoji: ts,
                              onSelectSticker: to,
                              onSelectSound: tu,
                              channel: T,
                              closeOnModalOuterClick: el,
                              parentModalKey: ei,
                              position: "top",
                              align: "right",
                              positionLayerClassName: e3.BD,
                          }),
                ],
            }),
        })
    );
});
