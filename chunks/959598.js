var r = {
    './source-code-pro/sourcecodepro-700-bold.woff2': ['711313'],
    './gg-mono/ggmono-600-semibold.woff2': ['750499', '44999'],
    './gg-mono/ggmono-700-bold.woff2': ['757883'],
    './gg-sans/ggsans-700-bolditalic.woff2': ['228978'],
    './noto-sans/notosans-700-bold.woff2': ['870744'],
    './gg-sans/ggsans-500-medium.woff2': ['5983'],
    './abc-ginto-normal/abcgintonormal-300-lightitalic.woff2': ['145934'],
    './noto-sans/notosans-600-semibolditalic.woff2': ['530636'],
    './gg-sans/ggsans-400-normalitalic.woff2': ['963686'],
    './gg-sans/ggsans-600-semibolditalic.woff2': ['480854'],
    './noto-sans/notosans-500-medium.woff2': ['2149'],
    './gg-sans/ggsans-800-extrabolditalic.woff2': ['69891'],
    './abc-ginto-discord/abcgintodiscord-400-normal.woff2': ['300481'],
    './abc-ginto-discord/abcgintodiscord-500-medium.woff2': ['575469'],
    './noto-sans/notosans-700-bolditalic.woff2': ['376255'],
    './noto-sans/notosans-400-normalitalic.woff2': ['101103'],
    './abc-ginto-normal/abcgintonormal-400-normal.woff2': ['862120'],
    './abc-ginto-normal/abcgintonormal-500-medium.woff2': ['309315'],
    './abc-ginto-normal/abcgintonormal-700-bolditalic.woff2': ['805987'],
    './abc-ginto-nord-discord/abcgintonorddiscord-700-bold.woff2': ['978222'],
    './gg-sans/ggsans-400-normal.woff2': ['776764'],
    './gg-sans/ggsans-500-mediumitalic.woff2': ['811135'],
    './gg-sans/ggsans-800-extrabold.woff2': ['362799'],
    './abc-ginto-nord/abcgintonord-800-extrabolditalic.woff2': ['858855'],
    './noto-sans/notosans-800-extrabold.woff2': ['514320'],
    './noto-sans/notosans-500-mediumitalic.woff2': ['390288'],
    './abc-ginto-normal/abcgintonormal-500-mediumitalic.woff2': ['455480'],
    './abc-ginto-normal/abcgintonormal-400-normalitalic.woff2': ['590102'],
    './abc-ginto-normal/abcgintonormal-800-extrabold.woff2': ['131883'],
    './abc-ginto-normal/abcgintonormal-800-extrabolditalic.woff2': ['516711'],
    './fraunces/fraunces-vf.woff2': ['894757'],
    './abc-ginto-normal/abcgintonormal-700-bold.woff2': ['394248'],
    './fraunces/fraunces-400-normal.woff2': ['18182', '56837'],
    './gg-mono/ggmono-400-normal.woff2': ['349374'],
    './gg-sans/ggsans-600-semibold.woff2': ['151859'],
    './noto-sans/notosans-400-normal.woff2': ['134131'],
    './source-code-pro/sourcecodepro-400-normal.woff2': ['654556'],
    './noto-sans/notosans-800-extrabolditalic.woff2': ['6675'],
    './source-code-pro/sourcecodepro-600-semibold.woff2': ['626025', '49678'],
    './corinthia/corinthia-400-normal.woff2': ['622814'],
    './abc-ginto-normal/abcgintonormal-300-light.woff2': ['451007'],
    './gg-sans/ggsans-700-bold.woff2': ['909671'],
    './noto-sans/notosans-600-semibold.woff2': ['381176'],
    './abc-ginto-nord/abcgintonord-800-extrabold.woff2': ['814727']
};
function i(e) {
    if (!n.o(r, e))
        return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
    var t = r[e],
        i = t[0];
    return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(i, 17);
    });
}
(i.keys = () => Object.keys(r)), (i.id = 959598), (e.exports = i);
