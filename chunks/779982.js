"use strict";
n.d(t, {
    Li: () => S,
    KE: () => b,
    Ni: () => v,
    aL: () => I,
    RN: () => A,
    ds: () => K,
    Kx: () => N,
    eg: () => B,
    GF: () => R,
    pd: () => w,
    Lv: () => j,
    Jn: () => y,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var i,
    r,
    s,
    a,
    o = n(64700),
    l =
        (((i = {})[(i.INNER_WIDTH = 1200)] = "INNER_WIDTH"),
        (i[(i.OVERFLOW_TOP = 304)] = "OVERFLOW_TOP"),
        (i[(i.OVERFLOW_BOTTOM = 212)] = "OVERFLOW_BOTTOM"),
        (i[(i.OVERFLOW_HORIZONTAL = 56)] = "OVERFLOW_HORIZONTAL"),
        i),
    u = n(102607),
    c = n(374380),
    d = n(691540),
    _ = n(857250),
    h = n(97483),
    f = n(626584),
    p = n(59318),
    E = n(572868),
    m = n(940622);
let g = new f.A("ShopAssetsPreviewUtils");
var A =
    (((r = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
    (r.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
    (r.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
    (r.HERO_BANNER_STATIC = "hero_banner"),
    (r.HERO_BANNER_ANIMATED = "hero_banner_animated"),
    (r.HERO_BANNER_RIVE = "hero_rive"),
    (r.HERO_LOGO = "hero_logo"),
    (r.FEATURED_BLOCK = "featured_block"),
    (r.UPSELL_BANNER = "upsell_banner"),
    (r.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
    (r.PDP_BACKGROUND = "pdp_bg"),
    (r.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
    (r.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
    (r.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
    (r.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
    (r.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
    (r.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
    (r.TAB_TOOLTIP = "tab_tooltip"),
    (r.LOGO = "logo"),
    (r.MOBILE_BANNER = "mobile_banner"),
    (r.MOBILE_BACKGROUND = "mobile_bg"),
    (r.MOBILE_HERO = "mobile_hero"),
    r);
let I = {
        catalog_banner: ["jpg", "png"],
        catalog_banner_animated: ["webm"],
        catalog_banner_rive: ["riv"],
        hero_banner: ["jpg", "png"],
        hero_banner_animated: ["webm"],
        hero_rive: ["riv"],
        hero_logo: ["png"],
        featured_block: ["png"],
        upsell_banner: ["jpg", "png"],
        upsell_banner_popout: ["png"],
        pdp_bg: ["jpg"],
        shop_button_bg_hover: ["png"],
        shop_button_bg_hover_dark: ["png"],
        shop_button_bg_hover_light: ["png"],
        shop_button_bg_resting: ["png"],
        shop_button_bg_resting_dark: ["png"],
        shop_button_bg_resting_light: ["png"],
        tab_tooltip: ["jpg", "png"],
        logo: ["png"],
        mobile_banner: ["jpg"],
        mobile_bg: ["jpg"],
        mobile_hero: ["jpg"],
    },
    T = new Map(Object.values(A).flatMap((e) => I[e].map((t) => [`${e}.${t}`, e]))),
    S = new Set(T.keys());
var y =
    (((s = {}).PROFILE_EFFECT = "profile_effect"),
    (s.AVATAR_DECORATION = "avatar_decoration"),
    (s.PROFILE_FRAME = "profile_frame"),
    s);
let C = ".DS_Store";
var N =
    (((a = {}).COLLECTION = "collection"),
    (a.AVATAR_DECORATIONS = "avatar_decorations"),
    (a.FRAMES = "frames"),
    (a.NAMEPLATES = "nameplates"),
    (a.PROFILE_EFFECTS = "profile_effects"),
    a);
function v(e) {
    (0, d.P0)((0, _.o)(e, h.Ck.FAILURE));
}
function R(e) {
    (0, d.P0)((0, _.o)(e, h.Ck.SUCCESS));
}
function O(e, t) {
    let n = new FileReader();
    (n.onload = (n) => {
        null == n.target || "string" != typeof n.target.result
            ? v("Error uploading file. Try again!")
            : t(e, n.target.result);
    }),
        n.readAsDataURL(e);
}
function b(e, t, n) {
    if (0 === e.length) return void n?.("No files found!");
    for (let n of e) O(n, t);
}
function D(e, t) {
    return `${e}/${t}`;
}
function L(e) {
    return (0, p.tT)(e.type) || (0, p.XB)(e.type) || (0, p.XA)(e.name);
}
function w(e) {
    return T.get(e.name) ?? null;
}
async function M(e) {
    let t = e.createReader();
    return (await new Promise((e) => t.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
}
let P = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== C && t.push(n);
        } else if (e.isDirectory) {
            let n = await M(e),
                i = await Promise.all(n.map((e) => P(e)));
            t.push(...i.flat());
        }
        return t;
    },
    x = (e, t, n, i) => {
        if (t.name === C) return;
        let r = D(e, t.name);
        if ("profile_effects" === n)
            L(t) || t.name.endsWith(".txt")
                ? (e in i.profileEffectFilesMap || (i.profileEffectFilesMap[e] = []),
                  i.profileEffectFilesMap[e].push(t))
                : i.ignoredFilenames.push(D(e, t.name));
        else
            L(t)
                ? "collection" === n || null === n
                    ? null != w(t)
                        ? i.collectionFiles.push(t)
                        : i.ignoredFilenames.push(r)
                    : "avatar_decorations" === n
                      ? i.avatarDecorationFiles.push(t)
                      : i.ignoredFilenames.push(r)
                : i.ignoredFilenames.push(r);
    };
async function k(e, t, n) {
    for (let i of await M(e))
        if (i.isFile) {
            let r = i,
                s = await new Promise((e) => r.file(e));
            x(e.name, s, t, n);
        } else {
            let e = await P(i);
            n.ignoredFilenames.push(...e.map((e) => D(i.name, e.name)));
        }
}
let U = async (e, t) => {
        let n = e.name,
            i = await M(e),
            r = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
        for (let e of i) {
            if (e.isFile) {
                if (e.name === C) continue;
                let i = e,
                    s = await new Promise((e) => i.file(e));
                (0, E.Y_)(s.name) ? (r.previewFile = s) : t.ignoredFilenames.push(`frames/${n}/${s.name}`);
                continue;
            }
            if (e.isDirectory) {
                let i = e.name;
                if ("foreground" === i || "background" === i) {
                    for (let s of await M(e))
                        if (s.isFile && s.name !== C) {
                            let e = s,
                                t = await new Promise((t) => e.file(t));
                            r.layerFiles.push({ file: t, folder: i });
                        } else if (s.isDirectory) {
                            let e = await P(s);
                            t.ignoredFilenames.push(...e.map((e) => `frames/${n}/${i}/${s.name}/${e.name}`));
                        }
                } else {
                    r.unrecognizedSubdirs.push(i);
                    let s = await P(e);
                    t.ignoredFilenames.push(...s.map((e) => `frames/${n}/${i}/${e.name}`));
                }
            }
        }
        (null != r.previewFile || 0 !== r.layerFiles.length) && (t.profileFrameDirsMap[n] = r);
    },
    G = async (e, t) => {
        for (let n of await M(e))
            n.isDirectory ? await U(n, t) : n.isFile && n.name !== C && t.ignoredFilenames.push(`frames/${n.name}`);
    },
    F = async (e, t) => {
        for (let n of await M(e))
            n.isDirectory
                ? await k(n, "profile_effects", t)
                : n.isFile && n.name !== C && t.ignoredFilenames.push(D(e.name, n.name));
    };
async function V(e, t) {
    for (let n of await M(e))
        if (n.isDirectory) {
            let e = n;
            if ("collection" === e.name) await k(e, "collection", t);
            else if ("avatar_decorations" === e.name) await k(e, "avatar_decorations", t);
            else if ("profile_effects" === e.name) await F(e, t);
            else if ("frames" === e.name) await G(e, t);
            else {
                let n = await P(e);
                t.ignoredFilenames.push(...n.map((t) => D(e.name, t.name)));
            }
        }
}
async function B(e) {
    let t = {
        collectionFiles: [],
        avatarDecorationFiles: [],
        profileEffectFilesMap: {},
        profileFrameDirsMap: {},
        ignoredFilenames: [],
    };
    for (let n of e)
        if (n.isDirectory) {
            let e = n.name;
            "collection" === e || "avatar_decorations" === e
                ? await k(n, e, t)
                : "profile_effects" === e
                  ? await F(n, t)
                  : "frames" === e
                    ? await G(n, t)
                    : await V(n, t);
        } else if (n.isFile) {
            let e = n;
            x("", await new Promise((t) => e.file(t)), null, t);
        }
    return (
        t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
        t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
        t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
        t
    );
}
function j(e) {
    return new Promise((t, n) => {
        let i = new window.Image(),
            r = setTimeout(() => n(Error("Timed out measuring image")), 15e3);
        (i.onload = () => {
            clearTimeout(r), t({ width: i.naturalWidth, height: i.naturalHeight });
        }),
            (i.onerror = () => {
                clearTimeout(r), n(Error("Failed to measure image"));
            }),
            (i.src = e);
    });
}
function H(e, t) {
    return e.length > 0 ? Math.max(...e) : t;
}
function Y(e, t, n) {
    return Math.max(0, e - (t - n));
}
async function W(e, t, n) {
    var i;
    let r,
        s,
        a = null != t.previewFile ? URL.createObjectURL(t.previewFile) : null,
        o = [],
        d = {};
    for (let { file: i, folder: r } of t.layerFiles) {
        let { parsed: t, errorType: s } = (0, E.Mf)(i.name);
        if (null == t) {
            let t = null != s ? E.h4[s] : "invalid";
            n.push(`frames/${e}/${r}/${i.name}: ${t}`);
            continue;
        }
        let a = E.R9[r],
            l = `preview-${e}-${a}-${t.index}`;
        o.push({
            layer: { id: l, type: t.type, order: a, anchor: t.anchor, responsive: t.responsive },
            order: a,
            index: t.index,
        }),
            (d[l] = URL.createObjectURL(i));
    }
    o.sort(E.ui);
    let _ = o.map((e) => e.layer);
    if (0 === _.length && null == a) return null;
    let h =
        ((i = (
            await Promise.all(
                o.map(async (e) => {
                    let { layer: t } = e;
                    try {
                        return { layer: t, dims: await j(d[t.id]) };
                    } catch (e) {
                        return g.error(`Failed to measure preview layer ${t.id}:`, e), null;
                    }
                }),
            )
        ).filter((e) => null != e)),
        (r = l.INNER_WIDTH),
        (s = H(
            i.map((e) => {
                let { dims: t } = e;
                return Math.round(Math.max(0, (t.width - r) / 2));
            }),
            0,
        )),
        {
            innerWidth: r,
            overflowTop: H(
                i
                    .filter((e) => {
                        let { layer: t } = e;
                        return t.type === c.O.STAPLE && t.anchor === u.T.TOP;
                    })
                    .map((e) => {
                        let { dims: t } = e;
                        return Y(t.height, 716, l.OVERFLOW_TOP);
                    }),
                0,
            ),
            overflowBottom: H(
                i
                    .filter((e) => {
                        let { layer: t } = e;
                        return t.type === c.O.STAPLE && t.anchor === u.T.BOTTOM;
                    })
                    .map((e) => {
                        let { dims: t } = e;
                        return Y(t.height, 424, l.OVERFLOW_BOTTOM);
                    }),
                0,
            ),
            overflowHorizontal: s,
        });
    return { key: e, previewSrc: a, layers: _, layerSrcByLayerId: d, ...h };
}
function K() {
    let [e, t] = o.useState(() => ({
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        })),
        { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i, upsertProfileFrame: r } = (0, m.JE)(),
        s = o.useCallback(
            async (e) => {
                let s = await B(e);
                s.collectionFiles.forEach((e) => {
                    O(e, (e) => {
                        let t = w(e);
                        null != t && n(t, e);
                    });
                }),
                    s.avatarDecorationFiles.forEach((e) => {
                        O(e, (e) => {
                            i(e);
                        });
                    }),
                    await Promise.all(
                        Object.entries(s.profileFrameDirsMap).map(async (e) => {
                            let [t, n] = e,
                                i = await W(t, n, s.ignoredFilenames);
                            null != i && r(t, i);
                        }),
                    ),
                    s.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
                    t(s);
            },
            [n, i, r],
        ),
        a = o.useCallback(() => {
            t((e) => ({
                ...e,
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
            }));
        }, []),
        l = o.useCallback(() => {
            t((e) => ({ ...e, ignoredFilenames: [] }));
        }, []);
    return {
        ignoredFilenames: e.ignoredFilenames,
        clearAssets: a,
        clearIgnoredFilenames: l,
        processAndUpsertAssets: s,
    };
}
