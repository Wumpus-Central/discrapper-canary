"use strict";
n.d(t, { d1: () => C, PS: () => v, nL: () => D, Os: () => O, kv: () => y, Av: () => b, rK: () => R, TT: () => S });
var i = n(77729),
    r = n(87955),
    s = n(735438),
    a = n.n(s),
    o = n(621466),
    l = n(626584),
    u = n(773669),
    c = n(403362),
    d = n(19575);
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
                      d.Ay.ensureModule("discord_spellcheck").then(() => {
                          let { cld: e } = d.Ay.requireModule("discord_spellcheck");
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
let f = {
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
    h = new l.A("Spellchecker"),
    p = i.A?.spellCheck;
function E(e) {
    e = f[e] ?? e;
    let t = (0, r.parse)(e.replace(/[_-]/g, "-"));
    if (null == t || null == t.langtag.language || null == t.langtag.region)
        return void h.error(`${e} is not a valid locale.`);
    let { language: n, region: i } = t.langtag;
    return `${n.language.toLowerCase()}-${i.toUpperCase()}`;
}
class m {
    languageDetector;
    regionPreference;
    _enabled = !0;
    misspelledWord = "";
    corrections = [];
    constructor(e) {
        const [t, n] = u.default.locale.split("-");
        this.regionPreference = n;
        const i = this.getAvailableLanguages(e);
        (this.languageDetector = new _(t, (n) => {
            let r = `${n}-${this.regionPreference}`;
            if (-1 !== e.indexOf(r)) this.setLocale(r);
            else {
                let e = i[n] ?? f[t];
                null != e && this.setLocale(e);
            }
        })),
            p.on("spellcheck-result", (e, t) => {
                (this.misspelledWord = e ?? ""), (this.corrections = t ?? []);
            });
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        p.setLearnedWords(e);
    }
    setLocale(e) {
        p.setLocale(e)?.then((t) => {
            h.info(`Switching to ${e}`, t ? "(available)" : "(unavailable)");
        });
    }
    setAppLocale(e) {
        this.regionPreference = e.split("-")[1];
    }
    detectLanguage(e) {
        this.enabled && this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let t = {};
        return (
            e.forEach((e) => {
                let [n] = e.split("-");
                t[n] = t[n] ?? e;
            }),
            t
        );
    }
    isMisspelled(e, t) {
        return "" !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        p.replaceMisspelling(e);
    }
}
let g = a().debounce((e, t) => {
    var n;
    let i =
        null == (n = t)
            ? null
            : (0, o.vq)(n, HTMLInputElement) || (0, o.vq)(n, HTMLTextAreaElement)
              ? n.value
              : (0, o.vq)(n) && n.hasAttribute("contenteditable")
                ? n.textContent
                : void 0;
    null != i && e.detectLanguage(i);
}, 250);
async function A() {
    let e = new m(((await p.getAvailableDictionaries()) ?? []).map(E).filter(c.Vq));
    return null != document.body && document.body.addEventListener("beforeinput", (t) => g(e, t.target), !0), e;
}
var I = n(723702);
function T() {
    return i.A?.spellCheck != null;
}
function S() {
    return (0, I.isDesktop)() && T();
}
let N = S() ? A() : null;
async function y(e) {
    let t = await N;
    null != t && (t.enabled = e);
}
async function C(e) {
    let t = await N;
    null != t && t.setLearnedWords(e);
}
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = await N;
    return null != n && n.isMisspelled(e, t);
}
async function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        i = await N;
    return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n);
}
async function R(e) {
    let t = await N;
    null != t && t.replaceMisspelling(e);
}
async function b(e) {
    let t = await N;
    null != t && t.setAppLocale(e);
}
function D(e) {
    return T() ? (i.A.spellCheck.on("spellcheck-result", e) ?? (() => {})) : () => {};
}
