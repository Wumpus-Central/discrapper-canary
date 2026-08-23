"use strict";
n.d(t, { Av: () => b, uz: () => D, d1: () => y, kv: () => L, nL: () => M, rK: () => v, TT: () => C });
var i = n(77729);
n(321073);
var r = n(87955),
    a = n(435558),
    s = n.n(a),
    l = n(621466),
    o = n(626584),
    d = n(773669),
    c = n(403362),
    u = n(19575);
class _ {
    _language;
    _onChange;
    _languageHint;
    _shouldProcess = !1;
    _processing = !1;
    _minimumTimeRemaining = 5;
    constructor(e, t) {
        (this._language = e), (this._languageHint = e), (this._onChange = t), t(e);
    }
    get language() {
        return this._language;
    }
    set language(e) {
        this._language !== e && ((this._language = e), this._onChange(e));
    }
    set languageHint(e) {
        this._languageHint = e;
    }
    process(e) {
        this._processing ||
            ((this._processing = !0),
            requestIdleCallback((t) => {
                var n, i;
                t.timeRemaining() <= this._minimumTimeRemaining
                    ? this._processEnd()
                    : (e.length > 256 && (e = e.slice(0, 256)),
                      ((n = e),
                      (i = this._languageHint),
                      u.Ay.ensureModule("discord_spellcheck").then(() => {
                          let { cld: e } = u.Ay.requireModule("discord_spellcheck");
                          return new Promise((t, r) => {
                              e.detect(n, { httpHint: i, encodingHint: "UTF8" }, (e, n) => {
                                  null != e
                                      ? r(Error(e.message))
                                      : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500
                                        ? r(Error("Not enough reliable text."))
                                        : t(n.languages[0].code);
                              });
                          });
                      })).then(
                          (e) => {
                              (this.language = e), this._processEnd(t.didTimeout);
                          },
                          () => {
                              this._processEnd(t.didTimeout);
                          },
                      ));
            }));
    }
    _processEnd() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this._processing = !1), e && this._minimumTimeRemaining++;
    }
}
let E = (0, n(945810).mj)({
        kind: "user",
        name: "2026-05-electron-multilang-spellcheck",
        defaultConfig: { enableElectronMultilangSpellcheck: !1 },
        variations: { 1: { enableElectronMultilangSpellcheck: !0 } },
    }),
    A = {
        aa: "aa-ET",
        af: "af-ZA",
        ak: "ak-GH",
        am: "am-ET",
        an: "an-ES",
        ar: "ar-MA",
        as: "as-IN",
        ay: "ay-PE",
        az: "az-AZ",
        be: "be-BY",
        bg: "bg-BG",
        bi: "bi-TV",
        bn: "bn-BD",
        bo: "bo-CN",
        br: "br-FR",
        bs: "bs-BA",
        ca: "ca-ES",
        ce: "ce-RU",
        cs: "cs-CZ",
        cv: "cv-RU",
        cy: "cy-GB",
        da: "da-DK",
        de: "de-DE",
        dv: "dv-MV",
        dz: "dz-BT",
        el: "el-GR",
        en: "en-US",
        es: "es-ES",
        et: "et-EE",
        eu: "eu-ES",
        fa: "fa-IR",
        ff: "ff-SN",
        fi: "fi-FI",
        fo: "fo-FO",
        fr: "fr-FR",
        fy: "fy-DE",
        ga: "ga-IE",
        gd: "gd-GB",
        gl: "gl-ES",
        gu: "gu-IN",
        gv: "gv-GB",
        ha: "ha-NG",
        he: "he-IL",
        hi: "hi-IN",
        hr: "hr-HR",
        ht: "ht-HT",
        hu: "hu-HU",
        hy: "hy-AM",
        ia: "ia-FR",
        id: "id-ID",
        ig: "ig-NG",
        ik: "ik-CA",
        is: "is-IS",
        it: "it-IT",
        iu: "iu-CA",
        ja: "ja-JP",
        ka: "ka-GE",
        kk: "kk-KZ",
        kl: "kl-GL",
        km: "km-KH",
        kn: "kn-IN",
        ko: "ko-KR",
        ks: "ks-IN",
        ku: "ku-TR",
        kw: "kw-GB",
        ky: "ky-KG",
        lb: "lb-LU",
        lg: "lg-UG",
        li: "li-BE",
        ln: "ln-CD",
        lo: "lo-LA",
        lt: "lt-LT",
        lv: "lv-LV",
        mg: "mg-MG",
        mh: "mh-MH",
        mi: "mi-NZ",
        mk: "mk-MK",
        ml: "ml-IN",
        mn: "mn-MN",
        mr: "mr-IN",
        ms: "ms-MY",
        mt: "mt-MT",
        my: "my-MM",
        nb: "nb-NO",
        ne: "ne-NP",
        nl: "nl-NL",
        nn: "nn-NO",
        nr: "nr-ZA",
        oc: "oc-FR",
        om: "om-KE",
        or: "or-IN",
        os: "os-RU",
        pa: "pa-PK",
        pl: "pl-PL",
        ps: "ps-AF",
        pt: "pt-PT",
        ro: "ro-RO",
        ru: "ru-RU",
        rw: "rw-RW",
        sa: "sa-IN",
        sc: "sc-IT",
        sd: "sd-IN",
        se: "se-NO",
        si: "si-LK",
        sk: "sk-SK",
        sl: "sl-SI",
        so: "so-SO",
        sq: "sq-AL",
        sr: "sr-RS",
        ss: "ss-ZA",
        st: "st-ZA",
        sv: "sv-SE",
        sw: "sw-KE",
        ta: "ta-IN",
        te: "te-IN",
        tg: "tg-TJ",
        th: "th-TH",
        ti: "ti-ER",
        tk: "tk-TM",
        tl: "tl-PH",
        tn: "tn-ZA",
        tr: "tr-TR",
        ts: "ts-ZA",
        tt: "tt-RU",
        ug: "ug-CN",
        uk: "uk-UA",
        ur: "ur-PK",
        uz: "uz-UZ",
        ve: "ve-ZA",
        vi: "vi-VN",
        wa: "wa-BE",
        wo: "wo-SN",
        xh: "xh-ZA",
        yi: "yi-US",
        yo: "yo-NG",
        zh: "zh-CN",
        zu: "zu-ZA",
    },
    h = new o.A("Spellchecker"),
    I = i.A?.spellCheck;
function f(e) {
    e = A[(e = "no" === e ? "nb" : e)] ?? e;
    let t = (0, r.parse)(e.replace(/[_-]/g, "-"));
    if (null == t || null == t.langtag.language || null == t.langtag.region)
        return void h.error(`${e} is not a valid locale.`);
    let { language: n, region: i } = t.langtag;
    return `${n.language.toLowerCase()}-${i.toUpperCase()}`;
}
class p {
    availableLocales;
    rawLocaleByNormalized = {};
    useMultilang;
    languageDetector = null;
    regionPreference;
    availableLanguagesByLanguage = {};
    _enabled = !0;
    misspelledWord = "";
    corrections = [];
    constructor(e) {
        const t = [];
        if (
            (e.forEach((e) => {
                let n = f(e);
                null != n && (t.push(n), (this.rawLocaleByNormalized[n] = this.rawLocaleByNormalized[n] ?? e));
            }),
            (this.availableLocales = t),
            (this.useMultilang = E.getConfig({
                location: "isElectronMultilangSpellcheckEnabled",
            }).enableElectronMultilangSpellcheck),
            (this.availableLanguagesByLanguage = this.buildLanguageIndex(t)),
            this.useMultilang)
        )
            this.applyLanguages(d.default.locale);
        else {
            const [e, t] = d.default.locale.split("-");
            (this.regionPreference = t),
                (this.languageDetector = new _(e, (t) => {
                    let n = `${t}-${this.regionPreference}`;
                    if (-1 !== this.availableLocales.indexOf(n)) this.applyLocale(n);
                    else {
                        let n = this.availableLanguagesByLanguage[t] ?? A[e];
                        null != n && this.applyLocale(n);
                    }
                }));
        }
        I.on("spellcheck-result", (e, t) => {
            (this.misspelledWord = e ?? ""), (this.corrections = t ?? []);
        });
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    get usesMultilang() {
        return this.useMultilang;
    }
    setLearnedWords(e) {
        I.setLearnedWords(e);
    }
    setAppLocale(e) {
        this.useMultilang ? this.applyLanguages(e) : (this.regionPreference = e.split("-")[1]);
    }
    detectLanguage(e) {
        !this.useMultilang && this.enabled && this.languageDetector?.process(e);
    }
    isMisspelled(e, t) {
        return "" !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    getCachedMisspelling() {
        return { misspelledWord: this.misspelledWord, corrections: this.corrections };
    }
    replaceMisspelling(e) {
        I.replaceMisspelling(e);
    }
    applyLocale(e) {
        I.setLocale(e)?.then((t) => {
            h.info(`Switching to ${e}`, t ? "(available)" : "(unavailable)");
        });
    }
    applyLanguages(e) {
        let t = [e, ...navigator.languages],
            n = Array.from(
                new Set(
                    t
                        .map((e) => {
                            let t = f(e);
                            if (null != t && this.availableLocales.includes(t)) return t;
                            let [n] = e.replace(/_/g, "-").split("-");
                            return this.availableLanguagesByLanguage[n.toLowerCase()] ?? null;
                        })
                        .filter(c.Vq),
                ),
            );
        if (0 === n.length) return void h.info(`No spellcheck languages resolved from candidates: ${t.join(", ")}`);
        let i = n.map((e) => this.rawLocaleByNormalized[e] ?? e);
        if (null == I.setSpellCheckerLanguages) {
            h.info(`setSpellCheckerLanguages unavailable, falling back to single-locale: ${i[0]}`),
                this.applyLocale(i[0]);
            return;
        }
        I.setSpellCheckerLanguages(i)?.then((e) => {
            if (!e) {
                h.info(`Failed to set spellcheck languages, falling back to single-locale: ${i[0]}`),
                    this.applyLocale(i[0]);
                return;
            }
            h.info(`Spellcheck languages: ${i.join(", ")}`, "(applied)");
        });
    }
    buildLanguageIndex(e) {
        let t = {};
        return (
            e.forEach((e) => {
                let [n] = e.split("-");
                t[n] = t[n] ?? e;
            }),
            t
        );
    }
}
let T = s().debounce((e, t) => {
    var n;
    let i =
        null == (n = t)
            ? null
            : (0, l.vq)(n, HTMLInputElement) || (0, l.vq)(n, HTMLTextAreaElement)
              ? n.value
              : (0, l.vq)(n) && n.hasAttribute("contenteditable")
                ? n.textContent
                : void 0;
    null != i && e.detectLanguage(i);
}, 250);
async function m() {
    let e = new p((await I.getAvailableDictionaries()) ?? []);
    return (
        e.usesMultilang ||
            (null != document.body && document.body.addEventListener("beforeinput", (t) => T(e, t.target), !0)),
        e
    );
}
var g = n(507263),
    S = n(723702);
function N() {
    return i.A?.spellCheck != null;
}
function C() {
    return (0, S.isDesktop)() && N();
}
let R = C()
        ? new Promise((e) => {
              Promise.resolve().then(() => (0, g.B)(() => e(m())));
          })
        : null,
    O = null;
async function L(e) {
    let t = await R;
    null != t && (t.enabled = e);
}
async function y(e) {
    let t = await R;
    null != t && t.setLearnedWords(e);
}
async function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        t = await R;
    if (null == t) return { misspelledWord: "", corrections: [] };
    let { misspelledWord: n, corrections: i } = t.getCachedMisspelling();
    return { misspelledWord: n, corrections: i.slice(0, e) };
}
async function v(e) {
    let t = await R;
    null != t && t.replaceMisspelling(e);
}
function b(e) {
    null != O && O.setAppLocale(e);
}
function M(e) {
    return N() ? (i.A.spellCheck.on("spellcheck-result", e) ?? (() => {})) : () => {};
}
R?.then((e) => {
    O = e;
});
