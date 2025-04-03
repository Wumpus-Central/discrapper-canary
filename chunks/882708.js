var e,
    o,
    i = n(668530),
    u = n(204384),
    s = i.process,
    c = i.Deno,
    f = (s && s.versions) || (c && c.version),
    a = f && f.v8;
a && (o = (e = a.split('.'))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !o && u && (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = u.match(/Chrome\/(\d+)/)) && (o = +e[1]), (t.exports = o);
