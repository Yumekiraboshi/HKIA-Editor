var ct = Array.isArray, Jr = Array.prototype.indexOf, nt = Array.prototype.includes, ft = Array.from, lr = Object.defineProperty, Ge = Object.getOwnPropertyDescriptor, $r = Object.getOwnPropertyDescriptors, en = Object.prototype, tn = Array.prototype, sr = Object.getPrototypeOf, qt = Object.isExtensible;
const rn = () => {
};
function nn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function or() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const P = 2, We = 4, ut = 8, cr = 1 << 24, Z = 16, W = 32, oe = 64, Et = 128, kt = 256, K = 512, D = 1024, x = 2048, ee = 4096, j = 8192, B = 16384, je = 32768, wt = 1 << 25, Ie = 65536, it = 1 << 17, an = 1 << 18, Me = 1 << 19, ln = 1 << 20, se = 1 << 25, Ee = 65536, at = 1 << 21, Ce = 1 << 22, ue = 1 << 23, Ye =                 Symbol("$state"), fr =                 Symbol("component"), sn =                 Symbol(""), ur =                 Symbol("attributes"), on =                 Symbol("class"), cn =                 Symbol("style"), yt =                 Symbol("text"), Qe = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fn = 1, un = 2, dn = 16, hn = 2, k =                 Symbol("uninitialized"), vn = "http://www.w3.org/1999/xhtml";
function _n() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function pn() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function gn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function dr(e) {
  return e === this.v;
}
function mn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function hr(e) {
  return !mn(e, this.v);
}
function bn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function En() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function wn(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function yn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function An() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ln(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function On() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Rn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Nn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let M = null;
function ke(e) {
  M = e;
}
function Dt(e, t = !1, r) {
  M = {
    p: M,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
                           
      S
    ),
    l: null
  };
}
function xt(e) {
  var t = (
                                   
    M
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Dr(n);
  }
  return t.i = !0, M = t.p, vr(e);
}
function vr(e = {}) {
  return lr(e, fr, { value: !0 }), e;
}
function _r() {
  return !0;
}
let _e = [];
function pr() {
  var e = _e;
  _e = [], nn(e);
}
function pe(e) {
  if (_e.length === 0 && !qe) {
    var t = _e;
    queueMicrotask(() => {
      t === _e && pr();
    });
  }
  _e.push(e);
}
function Cn() {
  for (; _e.length > 0; )
    pr();
}
const In = -7169;
function C(e, t) {
  e.f = e.f & In | t;
}
function Pt(e) {
  (e.f & K) !== 0 || e.deps === null ? C(e, D) : C(e, ee);
}
function gr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & P) === 0 || (t.f & Ee) === 0 || (t.f ^= Ee, gr(
                              
        t.deps
      ));
}
function mr(e, t, r) {
  (e.f & x) !== 0 ? t.add(e) : (e.f & ee) !== 0 && r.add(e), gr(e.deps), C(e, D);
}
function dt(e) {
  var t = O, r = S;
  X(null), ie(null);
  try {
    return e();
  } finally {
    X(t), ie(r);
  }
}
function kn(e, t, r, n) {
  const i = jt;
  var a = e.filter((c) => !c.settled), l = t.map(i);
  if (r.length === 0 && a.length === 0) {
    n(l);
    return;
  }
  var s = (
                         
    S
  ), o = Dn(), f = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((c) => c.promise)) : null;
  function h(c) {
    if ((s.f & B) === 0) {
      o();
      try {
        n([...l, ...c]);
      } catch (u) {
        te(u, s);
      }
      lt();
    }
  }
  var v = br();
  if (r.length === 0) {
    f.then(() => h([])).finally(v);
    return;
  }
  function p() {
    Promise.all(r.map((c) =>                 xn(c))).then(h).catch((c) => te(c, s)).finally(v);
  }
  f ? f.then(() => {
    o(), p(), lt();
  }) : p();
}
function Dn() {
  var e = (
                         
    S
  ), t = O, r = M, n = (
                        
    T
  );
  return function(a = !0) {
    ie(e), X(t), ke(r), a && (e.f & B) === 0 && (n?.activate(), n?.apply());
  };
}
function lt(e = !0) {
  ie(null), X(null), ke(null), e && T?.deactivate();
}
function br() {
  var e = (
                         
    S
  ), t = e.b, r = (
                        
    T
  ), n = !!t?.is_rendered();
  return t?.update_pending_count(1, r), r.increment(n, e), () => {
    t?.update_pending_count(-1, r), r.decrement(n, e);
  };
}
                       
function jt(e) {
  var t = P | x;
  return S !== null && (S.f |= Me), {
    ctx: M,
    deps: null,
    effects: null,
    equals: dr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
                      
      k
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
const He =                 Symbol("obsolete");
                       
function xn(e, t, r) {
  let n = (
                                
    S
  );
  n === null && En();
  var i = (
                             
                          
    void 0
  ), a = we(
                    
    k
  ), l = !O, s =                 new Set();
  return Zn(() => {
    var o = (
                           
      S
    ), f = or();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (c) => {
        c !== Qe && f.reject(c);
      }).finally(lt);
    } catch (c) {
      f.reject(c), lt();
    }
    var h = (
                          
      T
    );
    if (l) {
      if ((o.f & je) !== 0)
        var v = br();
      if (
                                                                                                                         
        n.b?.is_rendered()
      )
        h.async_deriveds.get(o)?.reject(He);
      else
        for (const c of s.values())
          c.reject(He);
      s.add(f), h.async_deriveds.set(o, f);
    }
    const p = (c, u = void 0) => {
      v?.(), s.delete(f), u !== He && (h.activate(), u ? (a.f |= ue, De(a, u)) : ((a.f & ue) !== 0 && (a.f ^= ue), De(a, c)), h.deactivate());
    };
    f.promise.then(p, (c) => p(null, c || "unknown"));
  }), kr(() => {
    for (const o of s)
      o.reject(He);
  }), new Promise((o) => {
    function f(h) {
      function v() {
        h === i ? o(a) : f(i);
      }
      h.then(v, v);
    }
    f(i);
  });
}
                       
function At(e) {
  const t =                 jt(e);
  return Ur(t), t;
}
                       
function Pn(e) {
  const t =                 jt(e);
  return t.equals = hr, t;
}
function jn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      z(
                             
        t[r]
      );
  }
}
function Mt(e) {
  var t, r = S, n = e.parent;
  if (!he && n !== null && e.v !== k &&                                                                                                      
  (n.f & (B | j)) !== 0)
    return _n(), e.v;
  ie(n);
  try {
    e.f &= ~Ee, jn(e), t = Br(e);
  } finally {
    ie(r);
  }
  return t;
}
function Er(e) {
  var t = Mt(e);
  if (!e.equals(t) && (e.wv = Fr(), (!T?.is_fork || e.deps === null) && (T !== null ? (T.capture(e, t, !0), Lt?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    C(e, D);
    return;
  }
  he || (J !== null ? (Ht() || T?.is_fork) && J.set(e, t) : Pt(e));
}
function Mn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && dt(() => {
        t.ac.abort(Qe), t.ac = null;
      }), t.fn !== null && (t.teardown = rn), Xe(t, 0), Vt(t));
}
function wr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Pe(t);
}
let vt = null, ye = null, T = null, Lt = null, J = null, Ot = null, qe = !1, _t = !1, Te = null, tt = null;
var Kt = 0;
let Un = 1;
class de {
  id = Un++;
                                              
  #t = !1;
  linked = !0;
                             
  #l = null;
                             
  #e = null;
                                                              
  async_deriveds =                 new Map();
     
                                                                      
                                                                                                                            
                                                            
                                       
     
  current =                 new Map();
     
                                                                                                                       
                                                           
                            
     
  previous =                 new Map();
     
                                                                                         
                                                                                       
                                        
     
  #o =                 new Set();
     
                                                                                     
                                        
     
  #n =                 new Set();
     
                                                             
     
  #a = 0;
     
                                                                                
                                
     
  #r =                 new Map();
     
                                                                                
                                                                         
                                                                                                                 
     
  #s = null;
     
                                             
                     
     
  #i = [];
     
                                                 
                     
     
  #_ = [];
     
                                                                               
                        
     
  #c =                 new Set();
     
                                          
                        
     
  #f =                 new Set();
     
                                                                              
                                                        
                                                                                     
                                                       
                                                      
     
  #d =                 new Map();
     
                                                                                                    
                        
     
  #p =                 new Set();
  is_fork = !1;
  #u = !1;
  constructor() {
    ye === null ? vt = ye = this : (ye.#e = this, this.#l = ye), ye = this;
  }
  #b() {
    if (this.is_fork) return !0;
    for (const n of this.#r.keys()) {
      for (var t = n, r = !1; t.parent !== null; ) {
        if (this.#d.has(t)) {
          r = !0;
          break;
        }
        t = t.parent;
      }
      if (!r)
        return !0;
    }
    return !1;
  }
     
                                                                      
                           
     
  skip_effect(t) {
    this.#d.has(t) || this.#d.set(t, { d: [], m: [] }), this.#p.delete(t);
  }
     
                                                                   
                                                
                           
                                          
     
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = this.#d.get(t);
    if (n) {
      this.#d.delete(t);
      for (var i of n.d)
        C(i, x), r(i);
      for (i of n.m)
        C(i, ee), r(i);
    }
    this.#p.add(t);
  }
  #g() {
    this.#t = !0, Kt++ > 1e3 && (this.#v(), Fn());
    for (const o of this.#c)
      this.#f.delete(o), C(o, x), this.schedule(o);
    for (const o of this.#f)
      C(o, ee), this.schedule(o);
    const t = this.#i;
    this.#i = [], this.apply();
    var r = Te = [], n = [], i = tt = [];
    for (const o of t)
      try {
        this.#w(o, r, n);
      } catch (f) {
        throw Lr(o), this.#b() || this.discard(), f;
      }
    if (T = null, i.length > 0) {
      var a = de.ensure();
      for (const o of i)
        a.schedule(o);
    }
    if (Te = null, tt = null, this.#b()) {
      this.#h(n), this.#h(r);
      for (const [o, f] of this.#d)
        Ar(o, f);
      i.length > 0 &&                       
      T.#g();
      return;
    }
    const l = this.#E();
    if (l) {
      this.#h(n), this.#h(r), l.#y(this);
      return;
    }
    this.#c.clear(), this.#f.clear();
    for (const o of this.#o) o(this);
    this.#o.clear(), Lt = this, Wt(n), Wt(r), Lt = null, this.#s?.resolve();
    var s = (
                                 
                            
      T
    );
    if (this.#a === 0 && (this.#i.length === 0 || s !== null) && this.#v(), this.#i.length > 0)
      if (s !== null) {
        const o = s;
        o.#i.push(...this.#i.filter((f) => !o.#i.includes(f)));
      } else
        s = this;
    s !== null && (re.clear(), s.#g());
  }
     
                                                            
                                            
                         
                              
                                     
     
  #w(t, r, n) {
    t.f ^= D;
    for (var i = t.first; i !== null; ) {
      var a = i.f, l = (a & (W | oe)) !== 0, s = l && (a & D) !== 0, o = s || (a & j) !== 0 || this.#d.has(i);
      if (!o && i.fn !== null) {
        l ? i.f ^= D : (a & We) !== 0 ? r.push(i) : Ze(i) && ((a & Z) !== 0 && this.#f.add(i), Pe(i));
        var f = i.first;
        if (f !== null) {
          i = f;
          continue;
        }
      }
      for (; i !== null; ) {
        var h = i.next;
        if (h !== null) {
          i = h;
          break;
        }
        i = i.parent;
      }
    }
  }
  #E() {
    for (var t = this.#l; t !== null; ) {
      if (!t.is_fork) {
        for (const [r, [, n]] of this.current)
          if (t.current.has(r) && !n)
            return t;
      }
      t = t.#l;
    }
    return null;
  }
     
                         
     
  #y(t) {
    for (const [n, i] of t.current)
      !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, i);
    for (const [n, i] of t.async_deriveds) {
      const a = this.async_deriveds.get(n);
      a && i.promise.then(a.resolve).catch(a.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#c, t.#f);
    const r = (n) => {
      var i = n.reactions;
      if (i !== null && !((n.f & P) !== 0 && (n.f & (x | ee)) === 0))
        for (const s of i) {
          var a = s.f;
          if ((a & P) !== 0)
            r(
                                    
              s
            );
          else {
            var l = (
                                   
              s
            );
            a & (Ce | Z) && !this.async_deriveds.has(l) && (this.#f.delete(l), C(l, x), this.schedule(l));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => t.discard()), t.#v(), T = this, this.#g();
  }
     
                              
     
  #h(t) {
    for (var r = 0; r < t.length; r += 1)
      mr(t[r], this.#c, this.#f);
  }
     
                                                          
                                                  
                          
                       
                                  
     
  capture(t, r, n = !1) {
    t.v !== k && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ue) === 0 && (this.current.set(t, [r, n]), J?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, J = null;
  }
  flush() {
    try {
      _t = !0, T = this, this.#g();
    } finally {
      Kt = 0, Ot = null, Te = null, tt = null, _t = !1, T = null, J = null, re.clear();
    }
  }
  discard() {
    for (const t of this.#n) t(this);
    this.#n.clear();
    for (const t of this.async_deriveds.values())
      t.reject(He);
    this.#v(), this.#s?.resolve();
  }
     
                           
     
  register_created_effect(t) {
    this.#_.push(t);
  }
  #m() {
    for (let v = vt; v !== null; v = v.#e) {
      var t = v.id < this.id, r = [];
      for (const [p, [c, u]] of this.current) {
        if (v.current.has(p)) {
          var n = (
                                         
            v.current.get(p)[0]
          );
          if (t && c !== n)
            v.current.set(p, [c, u]);
          else
            continue;
        }
        r.push(p);
      }
      if (t)
        for (const [p, c] of this.async_deriveds) {
          const u = v.async_deriveds.get(p);
          u && c.promise.then(u.resolve).catch(u.reject);
        }
      var i = [...v.current.keys()].filter(
        (p) => !                             
        v.current.get(p)[1]
      );
      if (!(!v.#t || i.length === 0)) {
        var a = i.filter((p) => !this.current.has(p));
        if (a.length === 0)
          t && v.discard();
        else if (r.length > 0) {
          if (t)
            for (const p of this.#p)
              v.unskip_effect(p, (c) => {
                (c.f & (Z | Ce)) !== 0 ? v.schedule(c) : v.#h([c]);
              });
          v.activate();
          var l =                 new Set(), s =                 new Map();
          for (var o of r)
            yr(o, a, l, s);
          s =                 new Map();
          var f = [...v.current].filter(([p, c]) => {
            const u = this.current.get(p);
            return u ? u[0] !== c[0] || u[1] !== c[1] : !0;
          }).map(([p]) => p);
          if (f.length > 0)
            for (const p of this.#_)
              (p.f & (B | j | it)) === 0 && Ut(p, f, s) && ((p.f & (Ce | Z)) !== 0 ? (C(p, x), v.schedule(p)) : v.#c.add(p));
          if (v.#i.length > 0 && !v.#u) {
            v.apply();
            for (var h of v.#i)
              v.#w(h, [], []);
            v.#i = [];
          }
          v.deactivate();
        }
      }
    }
  }
     
                              
                           
     
  increment(t, r) {
    if (this.#a += 1, t) {
      let n = this.#r.get(r) ?? 0;
      this.#r.set(r, n + 1);
    }
  }
     
                              
                           
     
  decrement(t, r) {
    if (this.#a -= 1, t) {
      let n = this.#r.get(r) ?? 0;
      n === 1 ? this.#r.delete(r) : this.#r.set(r, n - 1);
    }
    this.#u || (this.#u = !0, pe(() => {
      this.#u = !1, this.linked && this.flush();
    }));
  }
     
                                       
                                             
     
  transfer_effects(t, r) {
    for (const n of t)
      this.#c.add(n);
    for (const n of r)
      this.#f.add(n);
    t.clear(), r.clear();
  }
                                           
  oncommit(t) {
    this.#o.add(t);
  }
                                           
  ondiscard(t) {
    this.#n.add(t);
  }
  settled() {
    return (this.#s ??= or()).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new de();
      !_t && !qe && pe(() => {
        t.#t || t.flush();
      });
    }
    return T;
  }
  apply() {
    {
      J = null;
      return;
    }
  }
     
    
                           
     
  schedule(t) {
    if (Ot = t, t.b?.is_pending && (t.f & (We | ut | cr)) !== 0 && (t.f & je) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Te !== null && r === S && (O === null || (O.f & P) === 0))
        return;
      if ((n & (oe | W)) !== 0) {
        if ((n & D) === 0)
          return;
        r.f ^= D;
      }
    }
    this.#i.push(r);
  }
  #v() {
    if (this.linked) {
      var t = this.#l, r = this.#e;
      t === null ? vt = r : t.#e = r, r === null ? ye = t : r.#l = t, this.linked = !1;
    }
  }
}
function zn(e) {
  var t = qe;
  qe = !0;
  try {
    for (var r; ; ) {
      if (Cn(), T === null)
        return (
                          
          r
        );
      T.flush();
    }
  } finally {
    qe = t;
  }
}
function Fn() {
  try {
    On();
  } catch (e) {
    te(e, Ot);
  }
}
let le = null;
function Wt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (B | j)) === 0 && Ze(n) && (le =                 new Set(), Pe(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Pr(n), le?.size > 0)) {
        re.clear();
        for (const i of le) {
          if ((i.f & (B | j)) !== 0) continue;
          const a = [i];
          let l = i.parent;
          for (; l !== null; )
            le.has(l) && (le.delete(l), a.push(l)), l = l.parent;
          for (let s = a.length - 1; s >= 0; s--) {
            const o = a[s];
            (o.f & (B | j)) === 0 && Pe(o);
          }
        }
        le.clear();
      }
    }
    le = null;
  }
}
function yr(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & P) !== 0 ? yr(
                              
        i,
        t,
        r,
        n
      ) : (a & (Ce | Z)) !== 0 && (a & x) === 0 && Ut(i, t, n) && (C(i, x), zt(
                             
        i
      ));
    }
}
function Ut(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (nt.call(t, i))
        return !0;
      if ((i.f & P) !== 0 && Ut(
                              
        i,
        t,
        r
      ))
        return r.set(
                                
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function zt(e) {
  T.schedule(e);
}
function Ar(e, t) {
  if (!((e.f & W) !== 0 && (e.f & D) !== 0)) {
    (e.f & x) !== 0 ? t.d.push(e) : (e.f & ee) !== 0 && t.m.push(e), C(e, D);
    for (var r = e.first; r !== null; )
      Ar(r, t), r = r.next;
  }
}
function Lr(e) {
  C(e, D);
  for (var t = e.first; t !== null; )
    Lr(t), t = t.next;
}
let st =                 new Set();
const re =                 new Map();
let Or = !1;
function we(e, t) {
  var r = {
    f: 0,
                                                                            
    v: e,
    reactions: null,
    equals: dr,
    rv: 0,
    wv: 0
  };
  return r;
}
                       
function ae(e, t) {
  const r = we(e);
  return Ur(r), r;
}
                       
function Hn(e, t = !1, r = !0) {
  const n = we(e);
  return t || (n.equals = hr), n;
}
function fe(e, t, r = !1) {
  O !== null &&                                                                                         
                                                                
  (!$ || (O.f & it) !== 0) && _r() && (O.f & (P | Z | Ce | it)) !== 0 && (ne === null || !ne.has(e)) && Rn();
  let n = r ? Se(t) : t;
  return De(e, n, tt);
}
function De(e, t, r = null) {
  if (!e.equals(t)) {
    he ? re.set(e, t) : re.has(e) || re.set(e, e.v);
    var n = de.ensure();
    if (n.capture(e, t), (e.f & P) !== 0) {
      const i = (
                              
        e
      );
      (e.f & x) !== 0 && Mt(i), J === null && Pt(i);
    }
    e.wv = Fr(), Tr(e, x, r), S !== null && (S.f & D) !== 0 && (S.f & (W | oe)) === 0 && (V === null ? ti([e]) : V.push(e)), !n.is_fork && st.size > 0 && !Or && Bn();
  }
  return t;
}
function Bn() {
  Or = !1;
  for (const e of st) {
    (e.f & D) !== 0 && C(e, ee);
    let t;
    try {
      t = Ze(e);
    } catch {
      t = !0;
    }
    t && Pe(e);
  }
  st.clear();
}
function Ke(e) {
  fe(e, e.v + 1);
}
function Tr(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var l = n[a], s = l.f, o = (s & x) === 0;
      if (o && C(l, t), (s & it) !== 0)
        st.add(
                               
          l
        );
      else if ((s & P) !== 0) {
        var f = (
                                
          l
        );
        J?.delete(f), (s & Ee) === 0 && (s & K && (S === null || (S.f & at) === 0) && (l.f |= Ee), Tr(f, ee, r));
      } else if (o) {
        var h = (
                               
          l
        );
        (s & Z) !== 0 && le !== null && le.add(h), r !== null ? r.push(h) : zt(h);
      }
    }
}
function Se(e) {
  if (typeof e != "object" || e === null || Ye in e || fr in e)
    return e;
  const t = sr(e);
  if (t !== en && t !== tn)
    return e;
  var r =                 new Map(), n = ct(e), i =                 ae(0), a = be, l = (s) => {
    if (be === a)
      return s();
    var o = O, f = be;
    X(null), Jt(a);
    var h = s();
    return X(o), Jt(f), h;
  };
  return n && r.set("length",                 ae(
                        
    e.length
  )), new Proxy(
                      
    e,
    {
      defineProperty(s, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Tn();
        var h = r.get(o);
        return h === void 0 ? l(() => {
          var v =                 ae(f.value);
          return r.set(o, v), v;
        }) : fe(h, f.value, !0), !0;
      },
      deleteProperty(s, o) {
        var f = r.get(o);
        if (f === void 0) {
          if (o in s) {
            const h = l(() =>                 ae(k));
            r.set(o, h), Ke(i);
          }
        } else
          fe(f, k), Ke(i);
        return !0;
      },
      get(s, o, f) {
        if (o === Ye)
          return e;
        var h = r.get(o), v = o in s;
        if (h === void 0 && (!v || Ge(s, o)?.writable) && (h = l(() => {
          var c = Se(v ? s[o] : k), u =                 ae(c);
          return u;
        }), r.set(o, h)), h !== void 0) {
          var p = R(h);
          return p === k ? void 0 : p;
        }
        return Reflect.get(s, o, f);
      },
      getOwnPropertyDescriptor(s, o) {
        var f = Reflect.getOwnPropertyDescriptor(s, o);
        if (f && "value" in f) {
          var h = r.get(o);
          h && (f.value = R(h));
        } else if (f === void 0) {
          var v = r.get(o), p = v?.v;
          if (v !== void 0 && p !== k)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return f;
      },
      has(s, o) {
        if (o === Ye)
          return !0;
        var f = r.get(o), h = f !== void 0 && f.v !== k || Reflect.has(s, o);
        if (f !== void 0 || S !== null && (!h || Ge(s, o)?.writable)) {
          f === void 0 && (f = l(() => {
            var p = h ? Se(s[o]) : k, c =                 ae(p);
            return c;
          }), r.set(o, f));
          var v = R(f);
          if (v === k)
            return !1;
        }
        return h;
      },
      set(s, o, f, h) {
        var v = r.get(o), p = o in s;
        if (n && o === "length")
          for (var c = f; c <                              
          v.v; c += 1) {
            var u = r.get(c + "");
            u !== void 0 ? fe(u, k) : c in s && (u = l(() =>                 ae(k)), r.set(c + "", u));
          }
        if (v === void 0)
          (!p || Ge(s, o)?.writable) && (v = l(() =>                 ae(void 0)), fe(v, Se(f)), r.set(o, v));
        else {
          p = v.v !== k;
          var w = l(() => Se(f));
          fe(v, w);
        }
        var A = Reflect.getOwnPropertyDescriptor(s, o);
        if (A?.set && A.set.call(h, f), !p) {
          if (n && typeof o == "string") {
            var _ = (
                                           
              r.get("length")
            ), d = Number(o);
            Number.isInteger(d) && d >= _.v && fe(_, d + 1);
          }
          Ke(i);
        }
        return !0;
      },
      ownKeys(s) {
        R(i);
        var o = Reflect.ownKeys(s).filter((v) => {
          var p = r.get(v);
          return p === void 0 || p.v !== k;
        });
        for (var [f, h] of r)
          h.v !== k && !(f in s) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        Sn();
      }
    }
  );
}
function Xt(e) {
  try {
    if (e !== null && typeof e == "object" && Ye in e)
      return e[Ye];
  } catch {
  }
  return e;
}
function Sr(e, t) {
  return Object.is(Xt(e), Xt(t));
}
var Qt, Rr, Nr, Cr;
function Vn() {
  if (Qt === void 0) {
    Qt = window, Rr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Nr = Ge(t, "firstChild").get, Cr = Ge(t, "nextSibling").get, qt(e) && (e[on] = void 0, e[ur] = null, e[cn] = void 0, e.__e = void 0), qt(r) && (r[yt] = void 0);
  }
}
function xe(e = "") {
  return document.createTextNode(e);
}
                       
function Ft(e) {
  return (
                                      
    Nr.call(e)
  );
}
                       
function ht(e) {
  return (
                                      
    Cr.call(e)
  );
}
function Re(e, t) {
  return                 Ft(e);
}
function G(e, t = !1) {
  return                 Ft(e);
}
function Q(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n =                            
                    ht(n);
  return n;
}
function Gn(e) {
  e.textContent = "";
}
function Ir() {
  return !1;
}
function Yn(e, t, r) {
  return (
                                                                                             
    r ? document.createElement(e, { is: r }) : document.createElement(e)
  );
}
function qn(e) {
  var t = S;
  if (t === null)
    return O.f |= ue, e;
  if ((t.f & je) === 0 && (t.f & We) === 0)
    throw e;
  te(e, t);
}
function te(e, t) {
  if (!(t !== null && (t.f & B) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Et) !== 0 && (t.f & (B | wt)) === 0) {
        if ((t.f & je) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (r) {
          e = r;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function Kn(e) {
  S === null && (O === null && Ln(), An()), he && yn();
}
function Wn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ve(e, t) {
  var r = S;
  r !== null && (r.f & j) !== 0 && (e |= j);
  var n = {
    ctx: M,
    deps: null,
    nodes: null,
    f: e | x | K,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  T?.register_created_effect(n);
  var i = n;
  if ((e & We) !== 0)
    Te !== null ? Te.push(n) : de.ensure().schedule(n);
  else if (t !== null) {
    try {
      Pe(n);
    } catch (l) {
      throw z(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last &&                                      
    (i.f & Me) === 0 && (i = i.first, (e & Z) !== 0 && (e & Ie) !== 0 && i !== null && (i.f |= Ie));
  }
  if (i !== null && (i.parent = r, r !== null && Wn(i, r), O !== null && (O.f & P) !== 0 && (e & oe) === 0)) {
    var a = (
                            
      O
    );
    (a.effects ??= []).push(i);
  }
  return n;
}
function Ht() {
  return O !== null && !$;
}
function kr(e) {
  const t = ve(ut, null);
  return C(t, D), t.teardown = e, t;
}
function Xn(e) {
  Kn();
  var t = (
                         
    S.f
  ), r = !O && (t & W) !== 0 && M !== null && !M.i;
  if (r) {
    var n = (
                                     
      M
    );
    (n.e ??= []).push(e);
  } else
    return Dr(e);
}
function Dr(e) {
  return ve(We | ln, e);
}
function Qn(e) {
  de.ensure();
  const t = ve(oe | Me, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? me(t, () => {
      z(t), n(void 0);
    }) : (z(t), n(void 0));
  });
}
function Zn(e) {
  return ve(Ce | Me, e);
}
function Jn(e, t = 0) {
  return ve(ut | t, e);
}
function Ae(e, t = [], r = [], n = []) {
  kn(n, t, r, (i) => {
    ve(ut, () => {
      e(...i.map(R));
    });
  });
}
function Bt(e, t = 0) {
  var r = ve(Z | t, e);
  return r;
}
function Y(e) {
  return ve(W | Me, e);
}
function xr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = he, n = O;
    Zt(!0), X(null);
    try {
      t.call(null);
    } catch (i) {
      te(i, e.parent);
    } finally {
      Zt(r), X(n);
    }
  }
}
function Vt(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && dt(() => {
      i.abort(Qe);
    });
    var n = r.next;
    (r.f & oe) !== 0 ? r.parent = null : z(r, t), r = n;
  }
}
function $n(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & W) === 0 && z(t), t = r;
  }
}
function z(e, t = !0) {
  var r = !1;
  (t || (e.f & an) !== 0) && e.nodes !== null && e.nodes.end !== null && (ei(
    e.nodes.start,
                               
    e.nodes.end
  ), r = !0), e.f |= wt, Vt(e, t && !r), Xe(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  xr(e), e.f ^= wt, e.f |= B;
  var i = e.parent;
  i !== null && i.first !== null && Pr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ei(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null :                 ht(e);
    e.remove(), e = r;
  }
}
function Pr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function me(e, t, r = !0) {
  var n = [];
  e.f |= kt, jr(e, n, !0);
  var i = () => {
    r && z(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var l = () => --a || i();
    for (var s of n)
      s.out(l);
  } else
    i();
}
function jr(e, t, r) {
  if ((e.f & j) === 0) {
    e.f ^= j;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & oe) === 0) {
        var l = (i.f & Ie) !== 0 ||                                                             
                                                                     
                                                                         
        (i.f & W) !== 0 && (e.f & Z) !== 0;
        jr(i, t, l ? r : !1);
      }
      i = a;
    }
  }
}
function ot(e) {
  e.f &= ~kt, Mr(e, !0);
}
function Mr(e, t) {
  if ((e.f & kt) === 0 && (e.f & j) !== 0) {
    e.f ^= j, (e.f & D) === 0 && (C(e, x), de.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ie) !== 0 || (r.f & W) !== 0;
      Mr(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const l of a)
        (l.is_global || t) && l.in();
  }
}
function Gt(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null :                 ht(r);
      t.append(r), r = i;
    }
}
let rt = !1, he = !1;
function Zt(e) {
  he = e;
}
let O = null, $ = !1;
function X(e) {
  O = e;
}
let S = null;
function ie(e) {
  S = e;
}
let ne = null;
function Ur(e) {
  O !== null && (ne ??=                 new Set()).add(e);
}
let U = null, H = 0, V = null;
function ti(e) {
  V = e;
}
let zr = 1, ge = 0, be = ge;
function Jt(e) {
  be = e;
}
function Fr() {
  return ++zr;
}
function Ze(e) {
  var t = e.f;
  if ((t & x) !== 0)
    return !0;
  if (t & P && (e.f &= ~Ee), (t & ee) !== 0) {
    for (var r = (
                            
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (Ze(
                              
        a
      ) && Er(
                              
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & K) !== 0 &&                                                                   
                                                                
    J === null && C(e, D);
  }
  return !1;
}
function Hr(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ne !== null && ne.has(e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & P) !== 0 ? Hr(
                              
        a,
        t,
        !1
      ) : t === a && (r ? C(a, x) : (a.f & D) !== 0 && C(a, ee), zt(
                             
        a
      ));
    }
}
function Br(e) {
  var t = U, r = H, n = V, i = O, a = ne, l = M, s = $, o = be, f = e.f;
  U =                              
  null, H = 0, V = null, O = (f & (W | oe)) === 0 ? e : null, ne = null, ke(e.ctx), $ = !1, be = ++ge, e.ac !== null && (dt(() => {
    e.ac.abort(Qe);
  }), e.ac = null);
  try {
    e.f |= at;
    var h = (
                             
      e.fn
    ), v = h();
    e.f |= je;
    var p = $t(e);
    if (_r() && V !== null && !$ && p !== null && (e.f & (P | ee | x)) === 0)
      for (var c = 0; c <                        
      V.length; c++)
        Hr(
          V[c],
                               
          e
        );
    if (i !== null && i !== e) {
      if (ge++, i.deps !== null)
        for (let u = 0; u < r; u += 1)
          i.deps[u].rv = ge;
      if (t !== null)
        for (const u of t)
          u.rv = ge;
      V !== null && (n === null ? n = V : n.push(...                       
      V));
    }
    return (e.f & ue) !== 0 && (e.f ^= ue), v;
  } catch (u) {
    return $t(e), qn(u);
  } finally {
    e.f ^= at, U = t, H = r, V = n, O = i, ne = a, ke(l), $ = s, be = o;
  }
}
function $t(e) {
  var t = e.deps, r = T?.is_fork;
  if (U !== null) {
    var n;
    if (r || Xe(e, H), t !== null && H > 0)
      for (t.length = H + U.length, n = 0; n < U.length; n++)
        t[H + n] = U[n];
    else
      e.deps = t = U;
    if (Ht() && (e.f & K) !== 0)
      for (n = H; n < t.length; n++)
        (t[n].reactions ??= []).push(e);
  } else !r && t !== null && H < t.length && (Xe(e, H), t.length = H);
  return t;
}
function ri(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Jr.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & P) !== 0 &&                                                                                             
                                                                                                
                                                                                          
  (U === null || !nt.call(U, t))) {
    var a = (
                            
      t
    );
    (a.f & K) !== 0 && (a.f ^= K, a.f &= ~Ee), a.v !== k && Pt(a), a.ac !== null && dt(() => {
      a.ac.abort(Qe), a.ac = null, C(a, x);
    }), Mn(a), Xe(a, 0);
  }
}
function Xe(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ri(e, r[n]);
}
function Pe(e) {
  var t = e.f;
  if ((t & B) === 0) {
    C(e, D);
    var r = S, n = rt;
    S = e, rt = (t & (W | oe)) === 0;
    try {
      (t & (Z | cr)) !== 0 ? $n(e) : Vt(e), xr(e);
      var i = Br(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = zr;
      var a;
    } finally {
      rt = n, S = r;
    }
  }
}
function R(e) {
  var t = e.f, r = (t & P) !== 0;
  if (O !== null && !$) {
    var n = S !== null && (S.f & B) !== 0;
    if (!n && (ne === null || !ne.has(e))) {
      var i = O.deps;
      if ((O.f & at) !== 0)
        e.rv < ge && (e.rv = ge, U === null && i !== null && i[H] === e ? H++ : U === null ? U = [e] : U.push(e));
      else {
        O.deps ??= [], nt.call(O.deps, e) || O.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [O] : nt.call(a, O) || a.push(O);
      }
    }
  }
  if (he && re.has(e))
    return re.get(e);
  if (r) {
    var l = (
                            
      e
    );
    if (he) {
      var s = l.v;
      return ((l.f & D) === 0 && l.reactions !== null || Gr(l)) && (s = Mt(l)), re.set(l, s), s;
    }
    var o = (l.f & K) === 0 && !$ && O !== null && (rt || (O.f & K) !== 0), f = (l.f & je) === 0;
    Ze(l) && (o && (l.f |= K), Er(l)), o && !f && (wr(l), Vr(l));
  }
  if (J?.has(e))
    return J.get(e);
  if ((e.f & ue) !== 0)
    throw e.v;
  return e.v;
}
function Vr(e) {
  if (e.f |= K, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & P) !== 0 && (t.f & K) === 0 && (wr(
                              
        t
      ), Vr(
                              
        t
      ));
}
function Gr(e) {
  if (e.v === k) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (re.has(t) || (t.f & P) !== 0 && Gr(
                            
      t
    ))
      return !0;
  return !1;
}
function Yt(e) {
  var t = $;
  try {
    return $ = !0, e();
  } finally {
    $ = t;
  }
}
const ni = ["touchstart", "touchmove"];
function ii(e) {
  return ni.includes(e);
}
const Be =                 Symbol("events"), Yr =                 new Set(), Tt =                 new Set();
function ai(e, t, r) {
  (t[Be] ??= {})[e] = r;
}
function li(e) {
  for (var t = 0; t < e.length; t++)
    Yr.add(e[t]);
  for (var r of Tt)
    r(e);
}
let pt = null, gt = !1;
function er(e) {
  var t = this, r = (
                       
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
                                 
    i[0] || e.target
  );
  pt = e, gt || (gt = !0, setTimeout(() => {
    gt = !1, pt = null;
  }));
  var l = 0, s = pt === e && e[Be];
  if (s) {
    var o = i.indexOf(s);
    if (o !== -1 && (t === document || t ===                   
    window)) {
      e[Be] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (a =                       
  i[l] || e.target, a !== t) {
    lr(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var h = O, v = S;
    X(null), ie(null);
    try {
      for (var p, c = []; a !== null && a !== t; ) {
        try {
          var u = a[Be]?.[n];
          u != null && (!                  
          a.disabled ||                                                                                           
                                                                                                     
          e.target === a) && u.call(a, e);
        } catch (w) {
          p ? c.push(w) : p = w;
        }
        if (e.cancelBubble) break;
        l++, a = l < i.length ? (
                                
          i[l]
        ) : null;
      }
      if (p) {
        for (let w of c)
          queueMicrotask(() => {
            throw w;
          });
        throw p;
      }
    } finally {
      e[Be] = t, delete e.currentTarget, X(h), ie(v);
    }
  }
}
const si = (
                                                                                                             
  globalThis?.window?.trustedTypes &&                 globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
                               
    createHTML: (e) => e
  })
);
function oi(e) {
  return (
                         
    si?.createHTML(e) ?? e
  );
}
function ci(e) {
  var t = Yn("template");
  return t.innerHTML = oi(e.replaceAll("<!>", "<!---->")), t.content;
}
function fi(e, t) {
  var r = (
                         
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
                       
function Je(e, t) {
  var r = (t & hn) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = ci(i ? e : "<!>" + e), n =                            
                    Ft(n));
    var a = (
                                 
      r || Rr ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return fi(a, a), a;
  };
}
function Le(e, t) {
  e !== null && e.before(
                       
    t
  );
}
function ui(e) {
  let t = 0, r = we(0), n;
  return () => {
    Ht() && (R(r), Jn(() => (t === 0 && (n = Yt(() => e(() => Ke(r)))), t += 1, () => {
      pe(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Ke(r));
      });
    })));
  };
}
var di = Ie | Me;
function hi(e, t, r, n) {
  new vi(e, t, r, n);
}
class vi {
                                
  parent;
  is_pending = !1;
     
                                                                                                           
                                                             
                                        
     
  transform_error;
                             
  #t;
                                    
  #l = null;
                              
  #e;
                                         
  #o;
                       
  #n;
                              
  #a = null;
                              
  #r = null;
                              
  #s = null;
                                        
  #i = null;
  #_ = 0;
  #c = 0;
  #f = !1;
                            
  #d =                 new Set();
                            
  #p =                 new Set();
     
                                                                          
                                                                     
                                                                       
                                    
                                  
     
  #u = null;
  #b = ui(() => (this.#u = we(this.#_), () => {
    this.#u = null;
  }));
     
                               
                                 
                                               
                                                                         
     
  constructor(t, r, n, i) {
    this.#t = t, this.#e = r, this.#o = (a) => {
      var l = (
                             
        S
      );
      l.b = this, l.f |= Et, n(a);
    }, this.parent =                      
    S.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), this.#n = Bt(() => {
      this.#h();
    }, di);
  }
  #g() {
    try {
      this.#a = Y(() => this.#o(this.#t));
    } catch (t) {
      this.error(t);
    }
  }
     
                                                                                      
     
  #w(t) {
    const r = this.#e.failed, { reset: n, invoke_onerror: i } = this.#E(t);
    pe(i), r && (this.#s = Y(() => {
      r(
        this.#t,
        () => t,
        () => n
      );
    }));
  }
     
                                                                              
                                                 
                           
                                                                 
     
  #E(t) {
    var r = !1, n = !1;
    const i = () => {
      if (r) {
        gn();
        return;
      }
      r = !0, n && Nn(), this.#s !== null && me(this.#s, () => {
        this.#s = null;
      }), this.#v(() => {
        this.#h();
      });
    };
    return { reset: i, invoke_onerror: () => {
      try {
        n = !0, this.#e.onerror?.(t, i), n = !1;
      } catch (l) {
        te(l, this.#n && this.#n.parent);
      }
    } };
  }
  #y() {
    const t = this.#e.pending;
    t && (this.is_pending = !0, this.#r = Y(() => t(this.#t)), pe(() => {
      var r = this.#i = document.createDocumentFragment(), n = xe(), i = !1;
      if (r.append(n), this.#a = this.#v(() => {
        try {
          return Y(() => this.#o(n));
        } catch (a) {
          try {
            this.error(a), i = !0;
          } catch (l) {
            te(l, this.#n.parent);
          }
          return null;
        }
      }), this.#a === null) {
        this.#i = null, i && this.#m(
                              
          T
        );
        return;
      }
      this.#c === 0 && (this.#t.before(r), this.#i = null, me(
                             
        this.#r,
        () => {
          this.#r = null;
        }
      ), this.#m(
                            
        T
      ));
    }));
  }
  #h() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#_ = 0, this.#a = Y(() => {
        this.#o(this.#t);
      }), this.#c > 0) {
        var t = this.#i = document.createDocumentFragment();
        Gt(this.#a, t);
        const r = (
                                               
          this.#e.pending
        );
        this.#r = Y(() => r(this.#t));
      } else
        this.#m(
                              
          T
        );
    } catch (r) {
      this.error(r);
    }
  }
     
                         
     
  #m(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#p);
  }
     
                                                                          
                           
     
  defer_effect(t) {
    mr(t, this.#d, this.#p);
  }
     
                                                                                          
                       
     
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
     
                
                        
     
  #v(t) {
    var r = S, n = O, i = M;
    ie(this.#n), X(this.#n), ke(this.#n.ctx);
    try {
      return de.ensure(), t();
    } finally {
      ie(r), X(n), ke(i);
    }
  }
     
                                                                                     
                                                                                
                      
                         
     
  #A(t, r) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#A(t, r);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#m(r), this.#r && me(this.#r, () => {
      this.#r = null;
    }), this.#i && (this.#t.before(this.#i), this.#i = null));
  }
     
                                                                            
                                                                         
                                      
                      
                         
     
  update_pending_count(t, r) {
    this.#A(t, r), this.#_ += t, !(!this.#u || this.#f) && (this.#f = !0, pe(() => {
      this.#f = !1, this.#u && De(this.#u, this.#_);
    }));
  }
  get_effect_pending() {
    return this.#b(), R(
                                   
      this.#u
    );
  }
                               
  error(t) {
    if (!this.#e.onerror && !this.#e.failed)
      throw t;
    T?.is_fork ? (this.#a && T.skip_effect(this.#a), this.#r && T.skip_effect(this.#r), this.#s && T.skip_effect(this.#s), T.oncommit(() => {
      this.#L(t);
    })) : this.#L(t);
  }
     
                           
     
  #L(t) {
    this.#a && (z(this.#a), this.#a = null), this.#r && (z(this.#r), this.#r = null), this.#s && (z(this.#s), this.#s = null);
    let r = this.#e.failed;
    const n = (i) => {
      const { reset: a, invoke_onerror: l } = this.#E(i);
      l(), r && (this.#s = this.#v(() => {
        try {
          return Y(() => {
            var s = (
                                   
              S
            );
            s.b = this, s.f |= Et, r(
              this.#t,
              () => i,
              () => a
            );
          });
        } catch (s) {
          return te(
            s,
                                 
            this.#n.parent
          ), null;
        }
      }));
    };
    pe(() => {
      var i;
      try {
        i = this.transform_error(t);
      } catch (a) {
        te(a, this.#n && this.#n.parent);
        return;
      }
      i !== null && typeof i == "object" && typeof                   
      i.then == "function" ? i.then(
        n,
                                 
        (a) => te(a, this.#n && this.#n.parent)
      ) : n(i);
    });
  }
}
function q(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !==                   
  (e[yt] ??= e.nodeValue) && (e[yt] = r, e.nodeValue = `${r}`);
}
function _i(e, t) {
  return pi(e, t);
}
const $e =                 new Map();
function pi(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: l = !0, transformError: s }) {
  Vn();
  var o = void 0, f = Qn(() => {
    var h = r ?? t.appendChild(xe());
    hi(
                                 
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Dt({});
        var u = (
                                         
          M
        );
        a && (u.c = a), i && (n.$$events = i), o = e(c, n) || vr(), xt();
      },
      s
    );
    var v =                 new Set(), p = (c) => {
      for (var u = 0; u < c.length; u++) {
        var w = c[u];
        if (!v.has(w)) {
          v.add(w);
          var A = ii(w);
          for (const b of [t, document]) {
            var _ = $e.get(b);
            _ === void 0 && (_ =                 new Map(), $e.set(b, _));
            var d = _.get(w);
            d === void 0 ? (b.addEventListener(w, er, { passive: A }), _.set(w, 1)) : _.set(w, d + 1);
          }
        }
      }
    };
    return p(ft(Yr)), Tt.add(p), () => {
      for (var c of v)
        for (const A of [t, document]) {
          var u = (
                                              
            $e.get(A)
          ), w = (
                                 
            u.get(c)
          );
          --w == 0 ? (A.removeEventListener(c, er), u.delete(c), u.size === 0 && $e.delete(A)) : u.set(c, w);
        }
      Tt.delete(p), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return St.set(o, f), o;
}
let St =                 new WeakMap();
function tr(e, t) {
  const r = St.get(e);
  return r ? (St.delete(e), r(t)) : Promise.resolve();
}
class gi {
                             
  anchor;
                                
  #t =                 new Map();
     
                                                                   
                                                                      
             
        
                    
         
            
         
          
        
                                                                 
                             
     
  #l =                 new Map();
     
                                                                                          
                                                     
                             
     
  #e =                 new Map();
     
                                                
                     
     
  #o =                 new Set();
     
                                                                     
                                             
     
  #n = !0;
     
                                 
                                
     
  constructor(t, r = !0) {
    this.anchor = t, this.#n = r;
  }
     
                         
     
  #a = (t) => {
    if (this.#t.has(t)) {
      var r = (
                          
        this.#t.get(t)
      ), n = this.#l.get(r);
      if (n)
        ot(n), this.#o.delete(r);
      else {
        var i = this.#e.get(r);
        i && (ot(i.effect), this.#l.set(r, i.effect), this.#e.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [a, l] of this.#t) {
        if (this.#t.delete(a), a === t)
          break;
        const s = this.#e.get(l);
        s && (z(s.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#l) {
        if (a === r || this.#o.has(a)) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(a)) {
            var f = document.createDocumentFragment();
            Gt(l, f), f.append(xe()), this.#e.set(a, { effect: l, fragment: f });
          } else
            z(l);
          this.#o.delete(a), this.#l.delete(a);
        };
        this.#n || !n ? (this.#o.add(a), me(l, s, !1)) : s();
      }
    }
  };
     
                         
     
  #r = (t) => {
    this.#t.delete(t);
    const r = Array.from(this.#t.values());
    for (const [n, i] of this.#e)
      r.includes(n) || (z(i.effect), this.#e.delete(n));
  };
     
    
                     
                                                        
     
  ensure(t, r) {
    var n = (
                          
      T
    ), i = Ir();
    if (r && !this.#l.has(t) && !this.#e.has(t))
      if (i) {
        var a = document.createDocumentFragment(), l = xe();
        a.append(l), this.#e.set(t, {
          effect: Y(() => r(l)),
          fragment: a
        });
      } else
        this.#l.set(
          t,
          Y(() => r(this.anchor))
        );
    if (this.#t.set(n, t), i) {
      for (const [s, o] of this.#l)
        s === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [s, o] of this.#e)
        s === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(this.#a), n.ondiscard(this.#r);
    } else
      this.#a(n);
  }
}
function mt(e, t, r = !1) {
  var n = new gi(e), i = r ? Ie : 0;
  function a(l, s) {
    n.ensure(l, s);
  }
  Bt(() => {
    var l = !1;
    t((s, o = 0) => {
      l = !0, a(o, s);
    }), l || a(-1, null);
  }, i);
}
function mi(e, t, r) {
  for (var n = [], i = t.length, a, l = t.length, s = 0; s < i; s++) {
    let v = t[s];
    me(
      v,
      () => {
        if (a) {
          if (a.pending.delete(v), a.done.add(v), a.pending.size === 0) {
            var p = (
                                                
              e.outrogroups
            );
            Rt(e, ft(a.done)), p.delete(a), p.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = n.length === 0 && r !== null && e.pending.size === 0;
    if (o) {
      var f = (
                              
        r
      ), h = (
                              
        f.parentNode
      );
      Gn(h), h.append(f), e.items.clear();
    }
    Rt(e, t, !o);
  } else
    a = {
      pending: new Set(t),
      done:                 new Set()
    }, (e.outrogroups ??=                 new Set()).add(a);
}
function Rt(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n =                 new Set();
    for (const l of e.pending.values())
      for (const s of l)
        n.add(
                                 
          e.items.get(s).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= se;
      const l = document.createDocumentFragment();
      Gt(a, l);
    } else
      z(t[i], r);
  }
}
var rr;
function bi(e, t, r, n, i, a = null) {
  var l = e, s =                 new Map(), o = null, f =                 Pn(() => {
    var _ = r();
    return (
                        
      ct(_) ? _ : _ == null ? [] : ft(_)
    );
  }), h, v =                 new Map(), p = !0;
  function c(_) {
    (A.effect.f & B) === 0 && (A.pending.delete(_), A.fallback = o, Ei(A, h, l, t, n), o !== null && (h.length === 0 ? (o.f & se) === 0 ? ot(o) : (o.f ^= se, Ve(o, null, l)) : me(o, () => {
      o = null;
    })));
  }
  function u(_) {
    A.pending.delete(_);
  }
  var w = Bt(() => {
    h =                   
    R(f);
    for (var _ = h.length, d =                 new Set(), b = (
                          
      T
    ), g = Ir(), E = 0; E < _; E += 1) {
      var m = h[E], L = n(m, E), y = p ? null : s.get(L);
      y ? (y.v && De(y.v, m), y.i && De(y.i, E), g && b.unskip_effect(y.e)) : (y = wi(
        s,
        p ? l : rr ??= xe(),
        m,
        L,
        E,
        i,
        t,
        r
      ), p || (y.e.f |= se), s.set(L, y)), d.add(L);
    }
    if (_ === 0 && a && !o && (p ? o = Y(() => a(l)) : (o = Y(() => a(rr ??= xe())), o.f |= se)), _ > d.size && wn(), !p)
      if (v.set(b, d), g) {
        for (const [N, I] of s)
          d.has(N) || b.skip_effect(I.e);
        b.oncommit(c), b.ondiscard(u);
      } else
        c(b);
    R(f);
  }), A = { effect: w, items: s, pending: v, outrogroups: null, fallback: o };
  p = !1;
}
function Fe(e) {
  for (; e !== null && (e.f & W) === 0; )
    e = e.next;
  return e;
}
function Ei(e, t, r, n, i) {
  var a = t.length, l = e.items, s = Fe(e.effect.first), o, f = null, h = [], v = [], p, c, u, w;
  for (w = 0; w < a; w += 1) {
    if (p = t[w], c = i(p, w), u =                        
    l.get(c).e, e.outrogroups !== null)
      for (const y of e.outrogroups)
        y.pending.delete(u), y.done.delete(u);
    if ((u.f & j) !== 0 && ot(u), (u.f & se) !== 0)
      if (u.f ^= se, u === s)
        Ve(u, null, r);
      else {
        var A = f ? f.next : s;
        u === e.effect.last && (e.effect.last = u.prev), u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), ce(e, f, u), ce(e, u, A), Ve(u, A, r), f = u, h = [], v = [], s = Fe(f.next);
        continue;
      }
    if (u !== s) {
      if (o !== void 0 && o.has(u)) {
        if (h.length < v.length) {
          var _ = v[0], d;
          f = _.prev;
          var b = h[0], g = h[h.length - 1];
          for (d = 0; d < h.length; d += 1)
            Ve(h[d], _, r);
          for (d = 0; d < v.length; d += 1)
            o.delete(v[d]);
          ce(e, b.prev, g.next), ce(e, f, b), ce(e, g, _), s = _, f = g, w -= 1, h = [], v = [];
        } else
          o.delete(u), Ve(u, s, r), ce(e, u.prev, u.next), ce(e, u, f === null ? e.effect.first : f.next), ce(e, f, u), f = u;
        continue;
      }
      for (h = [], v = []; s !== null && s !== u; )
        (o ??=                 new Set()).add(s), v.push(s), s = Fe(s.next);
      if (s === null)
        continue;
    }
    (u.f & se) === 0 && h.push(u), f = u, s = Fe(u.next);
  }
  if (e.outrogroups !== null) {
    for (const y of e.outrogroups)
      y.pending.size === 0 && (Rt(e, ft(y.done)), e.outrogroups?.delete(y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || o !== void 0) {
    var E = [];
    if (o !== void 0)
      for (u of o)
        (u.f & j) === 0 && E.push(u);
    for (; s !== null; )
      (s.f & j) === 0 && s !== e.fallback && E.push(s), s = Fe(s.next);
    var m = E.length;
    if (m > 0) {
      var L = null;
      mi(e, E, L);
    }
  }
}
function wi(e, t, r, n, i, a, l, s) {
  var o = (l & fn) !== 0 ? (l & dn) === 0 ?                 Hn(r, !1, !1) : we(r) : null, f = (l & un) !== 0 ? we(i) : null;
  return {
    v: o,
    i: f,
    e: Y(() => (a(t, o ?? r, f ?? i, s), () => {
      e.delete(n);
    }))
  };
}
function Ve(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & se) === 0 ? (
                                
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
                                   
                        ht(n)
      );
      if (a.before(n), n === i)
        return;
      n = l;
    }
}
function ce(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function yi(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ai(e, t) {
  var r = e.__defaultValue, n = e.multiple, i = n ? r ?? [] : null;
  if (!(n && !ct(i))) {
    e.selectedIndex;
    for (var a of e.options) {
      var l = Nt(a);
      yi(
        a,
        n ? (
                              
          i.includes(l)
        ) : Sr(l, r)
      );
    }
  }
}
function qr(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ct(t))
      return pn();
    for (var n of e.options)
      n.selected = t.includes(Nt(n));
    return;
  }
  for (n of e.options) {
    var i = Nt(n);
    if (Sr(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Li(e) {
  var t = new MutationObserver((r) => {
    r.every(Oi) || ("__defaultValue" in e && Ai(e), "__value" in e && qr(e, e.__value));
  });
  t.observe(e, {
                                       
    childList: !0,
    subtree: !0,
                            
                                                       
                                                     
                                                              
    attributes: !0,
    attributeFilter: ["value"]
  }), kr(() => {
    t.disconnect();
  });
}
function Nt(e) {
  return "__value" in e ? e.__value : e.value;
}
function Oi(e) {
  if (
                          
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((r) => r.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const Ti =                 Symbol("is custom element"), Si =                 Symbol("is html");
function Ne(e, t, r, n) {
  var i = Ri(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[sn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ni(e).has(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ri(e) {
  return (
                                                    
                      
    e[ur] ??= {
      [Ti]: e.nodeName.includes("-"),
      [Si]: e.namespaceURI === vn
    }
  );
}
var nr =                 new Map();
function Ni(e) {
  var t = e.getAttribute("is") || e.nodeName, r = nr.get(t);
  if (r) return r;
  nr.set(t, r =                 new Set());
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = $r(i);
    for (var l in n)
      n[l].set &&                                                                                     
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    i = sr(i);
  }
  return r;
}
function Ci(e) {
  M === null && bn(), Xn(() => {
    const t = Yt(e);
    if (typeof t == "function") return (
                               
      t
    );
  });
}
const Ii = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??=                 new Set()).add(Ii);
var ki =                 Je("<option> </option>"), ir =                 Je('<p role="status" class="svelte-1jhtfjo"> </p>'), Di =                 Je('<p role="alert" class="svelte-1jhtfjo"> </p>'), xi =                 Je('<div class="locale-preference svelte-1jhtfjo"><label for="hkiaLocale"> </label> <select id="hkiaLocale" aria-describedby="hkiaLocaleNotice" class="svelte-1jhtfjo"><option> </option><!></select> <p id="hkiaLocaleNotice" class="svelte-1jhtfjo"> </p> <!> <!> <!></div>');
function Pi(e, t) {
  Dt(t, !0);
  const r =                 At(() => t.state.preference.mode === "manual" ? t.state.preference.locale : "auto");
  function n(g) {
    const E = g.currentTarget, m = E.value;
    E.value = R(r), m === "auto" ? t.onchoose({ mode: "auto" }) : t.entries.some((L) => L.id === m) && t.onchoose({ mode: "manual", locale: m });
  }
  var i = xi(), a = Re(i), l = G(a, !0), s = Q(a, 2), o = Re(s), f = G(o, !0);
  o.value = o.__value = "auto";
  var h = Q(o);
  bi(h, 17, () => t.entries, (g) => g.id, (g, E) => {
    var m = ki(), L = G(m, !0), y = {};
    Ae(() => {
      Ne(m, "lang", R(E).htmlLang), q(L, R(E).nativeName), y !== (y = R(E).id) && (m.value = (m.__value = y) ?? "");
    }), Le(g, m);
  });
  var v;
  Li(s);
  var p = Q(s, 2), c = G(p, !0), u = Q(p, 2);
  {
    var w = (g) => {
      var E = ir(), m = G(E, !0);
      Ae(() => q(m, t.labels.loading)), Le(g, E);
    };
    mt(u, (g) => {
      t.state.status === "LOADING" && g(w);
    });
  }
  var A = Q(u, 2);
  {
    var _ = (g) => {
      var E = Di(), m = G(E, !0);
      Ae(() => q(m, t.labels.error)), Le(g, E);
    };
    mt(A, (g) => {
      t.state.status === "ERROR" && g(_);
    });
  }
  var d = Q(A, 2);
  {
    var b = (g) => {
      var E = ir(), m = G(E, !0);
      Ae(() => q(m, t.labels.storageUnavailable)), Le(g, E);
    };
    mt(d, (g) => {
      t.state.storage === "UNAVAILABLE" && g(b);
    });
  }
  Ae(() => {
    q(l, t.labels.label), s.disabled = t.state.status === "IDLE" || t.state.status === "CLOSED", Ne(s, "aria-busy", t.state.status === "LOADING"), q(f, t.labels.auto), v !== (v = R(r)) && (s.value = (s.__value = v) ?? "", qr(s, v)), q(c, t.labels.unverified);
  }), ai("change", s, n), Le(e, i), xt();
}
li(["change"]);
var ji =                 Je('<div><!> <div data-hkia-locale-scope="" class="svelte-r8qky4"><strong> </strong> <ul class="svelte-r8qky4"><li> </li><li> </li><li> </li></ul> <p class="svelte-r8qky4"><span> </span><span lang="ja">日本語名・英語名・GUIDで検索</span></p></div></div>');
function Mi(e, t) {
  Dt(t, !0);
  const r = Yt(() => t.controller), n = r.consumer;
  let i =                 ae(Se(n.state));
  const a =                 At(() => R(i).active?.pack.verified.catalog), l =                 At(() => ({
    label: R(a)?.["locale.label"] ?? "Language",
    auto: R(a)?.["locale.auto"] ?? "Automatic (browser)",
    loading: R(a)?.["locale.loading"] ?? "Loading language data…",
    unverified: R(a)?.["locale.unverified"] ?? "Language availability in game settings is not verified.",
    error: R(a)?.["error.locale"] ?? "Language data could not be verified.",
    storageUnavailable: R(a)?.["locale.storageUnavailable"] ?? "Language preference could not be stored."
  }));
  Ci(() => {
    const L = n.subscribe((y) => fe(i, y, !0));
    return n.start("3.0.1"), () => {
      L(), r.close();
    };
  });
  function s(L) {
    n.choose(L);
  }
  var o = ji(), f = Re(o);
  Pi(f, {
    get entries() {
      return n.entries;
    },
    get state() {
      return R(i);
    },
    get labels() {
      return R(l);
    },
    onchoose: s
  });
  var h = Q(f, 2), v = Re(h), p = G(v, !0), c = Q(v, 2), u = Re(c), w = G(u, !0), A = Q(u), _ = G(A), d = Q(A), b = G(d, !0), g = Q(c, 2), E = Re(g), m = G(E);
  Ae(() => {
    Ne(o, "data-hkia-locale-chrome", R(i).active?.locale ?? ""), Ne(o, "data-locale-status", R(i).status), Ne(o, "lang", R(i).active?.locale ?? "en"), Ne(h, "lang", R(i).active?.locale ?? "en"), q(p, R(a)?.["state.previewOnly"] ?? "Preview only"), q(w, R(a)?.["nav.tabs"] ?? "Tabs"), q(_, `${R(a)?.["ach.filter.label"] ?? "Achievement filters" ?? ""} / ${R(a)?.["col.filter.label"] ?? "Collection filters" ?? ""}`), q(b, R(a)?.["ach.detail.heading"] ?? "Achievement details"), q(m, `${R(a)?.["ach.search.label"] ?? "Achievement search" ?? ""}:`);
  }), Le(e, o), xt();
}
function Ui(e) {
  const { runtime: t, storage: r, registry: n } = e, i = n.map((d) => Object.freeze({ ...d })), a = Object.freeze(i.map((d) => d.id));
  if (!a.length || new Set(a).size !== a.length || i.some((d) => !d.id || !d.nativeName || !d.htmlLang || !["ltr", "rtl"].includes(d.direction))) throw new Error("INVALID_LOCALE_REGISTRY");
  let l = "AVAILABLE";
  const s = { getItem(d) {
    try {
      return r.getItem(d);
    } catch (b) {
      throw l = "UNAVAILABLE", b;
    }
  }, setItem(d, b) {
    try {
      r.setItem(d, b);
    } catch (g) {
      throw l = "UNAVAILABLE", g;
    }
  }, removeItem(d) {
    try {
      r.removeItem(d);
    } catch (b) {
      throw l = "UNAVAILABLE", b;
    }
  } };
  let o = t.readPreference(s);
  o.mode === "manual" && !a.includes(o.locale) && (o = { mode: "auto" });
  let f = Object.freeze({ status: "IDLE", preference: Object.freeze({ ...o }), version: null, active: null, storage: l, error: null }), h = 0;
  const v = t.createLocaleLoader(e.fetchVerified), p =                 new Set();
  function c(d) {
    return d === h && f.status !== "CLOSED";
  }
  function u(d) {
    const b = Object.freeze(d);
    f = b;
    for (const g of p) {
      if (f !== b) break;
      g(b);
    }
  }
  function w(d) {
    return d.mode === "auto" || d.mode === "manual" && a.includes(d.locale);
  }
  function A(d, b) {
    let g;
    const E = (N, I) => {
      if (g) throw Error("MULTIPLE_PREFERENCE_WRITES");
      g = { key: N, value: I };
    };
    try {
      t.writePreference({ getItem() {
        throw Error("UNEXPECTED_PREFERENCE_READ");
      }, setItem: E, removeItem: (N) => E(N, null) }, b);
    } catch {
      c(d) && (l = "UNAVAILABLE");
      return;
    }
    if (!c(d)) return;
    if (!g) {
      l = "UNAVAILABLE";
      return;
    }
    const { key: m, value: L } = g;
    let y;
    try {
      y = r.getItem(m);
    } catch {
      c(d) && (l = "UNAVAILABLE");
      return;
    }
    if (c(d)) {
      try {
        L === null ? r.removeItem(m) : r.setItem(m, L);
      } catch {
        c(d) && (l = "UNAVAILABLE");
      }
      if (!c(d))
        try {
          r.getItem(m) === L && y !== L && (y === null ? r.removeItem(m) : r.setItem(m, y));
        } catch {
          l = "UNAVAILABLE";
        }
    }
  }
  async function _(d, b, g = !1) {
    if (f.status === "CLOSED") throw new Error("LOCALE_CONSUMER_CLOSED");
    if (!["3.0.0", "3.0.1"].includes(d) || !w(b)) throw new Error("INVALID_LOCALE_REQUEST");
    const E = Object.freeze({ ...b }), m = ++h;
    let L, y;
    try {
      const N = e.browser();
      if (!c(m) || (L = t.resolvePreference(E, N, a), !c(m))) return "STALE";
      const I = i.find((Ue) => Ue.id === L);
      if (!I) throw new Error("INVALID_RESOLVED_LOCALE");
      y = I;
    } catch (N) {
      if (!c(m)) return "STALE";
      throw N;
    }
    try {
      if (u({ ...f, status: "LOADING", version: d, active: f.active?.version === d ? f.active : null, error: null }), !c(m)) return "STALE";
      const N = await v.load(d, L);
      if (!c(m) || N.status === "STALE") return "STALE";
      if (N.pack.version !== d || N.pack.locale !== L)
        return u({ ...f, status: "ERROR", error: "PACK_MISMATCH" }), c(m) ? "ERROR" : "STALE";
      const I = f.active, Ue = () => {
        if (f.status === "CLOSED" || !I || f.active !== I) return;
        const ze = i.find((Zr) => Zr.id === I.locale);
        if (ze) try {
          e.documentLanguage(ze.htmlLang, ze.direction);
        } catch {
        }
      };
      try {
        e.documentLanguage(y.htmlLang, y.direction);
      } catch (ze) {
        if (!c(m))
          return Ue(), "STALE";
        throw ze;
      }
      return !c(m) || (g && A(m, E), !c(m)) ? (Ue(), "STALE") : (u({ status: "READY", preference: E, version: d, active: Object.freeze({ version: d, locale: L, pack: N.pack }), storage: l, error: null }), c(m) ? "READY" : "STALE");
    } catch {
      return c(m) ? (u({ ...f, status: "ERROR", storage: l, error: "LOAD_FAILED" }), c(m) ? "ERROR" : "STALE") : "STALE";
    }
  }
  return Object.freeze({ get state() {
    return f;
  }, entries: Object.freeze(i), subscribe(d) {
    return p.add(d), d(f), () => p.delete(d);
  }, start(d) {
    return _(d, f.preference);
  }, choose(d) {
    if (f.version === null) throw new Error("LOCALE_VERSION_REQUIRED");
    return _(f.version, d, !0);
  }, refreshAuto() {
    if (f.version === null) throw new Error("LOCALE_VERSION_REQUIRED");
    return _(f.version, f.preference);
  }, close() {
    f.status !== "CLOSED" && (h++, v.invalidate(), u({ ...f, status: "CLOSED", active: null, version: null, error: null }), p.clear());
  } });
}
const Ct = Object.freeze({ de: "bd5bb8948e5e15e886c4f58421b00b41f0ec68a8ec627b023776ac1525507edb", en: "af38facf8f7acbb982c9794909a1cc08edd5d94850795d69cd9ef23640e80c9f", "en-GB": "af38facf8f7acbb982c9794909a1cc08edd5d94850795d69cd9ef23640e80c9f", es: "fb3061db5c00ef1c32d24af6b49246e53924dd90bd7984993c4a0774d037950d", fr: "1504c6d257bfb77003fecdd7acbc5cf114a8e51050a7521ab4ca42eeb2fc9737", "fr-CA": "17360cc5e61429400bdf4fa703121a54a0aeaf2368902609bc2e0d7dfa166038", it: "252954237409005d1fee26f96f604619380001917dccd93b133ead52a6549619", ja: "5729953617fdda2c39fef0499dc922a55c6b4a0d0bf134fa1a656cb3deb74851", ko: "df8800988f3c50fcee9a73e5c60093da4ef2737bb62cd841466ecae2e41874c7", nl: "a9c9f522c04c61a85e63d030a2407028e122a4c9cff95d57d7b1df6e1c7ae948", "pt-BR": "9befdaa8b85d09f623f75ed980af465afa88e7a07a163ec7f87f9aaf90974c13", ru: "08c523b001893cb1c1b3a510ac68a1874c1194ef7a0690f2aad1cd8f1c2d57cd", tr: "9e0a2f2ee46bb9f5c8eae28842e4ea53cc1000146d375250b132e450ee5530b5", "zh-Hans": "9a5b1098e6cf9a9f19a0dea90a48bda78ecd0ef95ade4c4ca54e4082237b0139", "zh-Hant": "9638729fca88ca34e47006eef3889b8b2491ddc0a79cf6588f155ad2de0633cc" }), Kr = Object.freeze(["nav.achievements", "nav.collections", "nav.workspace", "nav.tabs", "r2.preview", "ach.intro", "ach.count", "ach.empty", "col.intro", "col.count", "ach.search.label", "ach.search.placeholder", "ach.filter.label", "ach.filter.all", "ach.filter.complete", "ach.filter.incomplete", "ach.filter.missing", "ach.filter.unknownSource", "ach.image.label", "ach.image.all", "ach.image.exact", "ach.image.sourceNull", "ach.image.unknown", "ach.sort.label", "ach.sort.source", "ach.sort.name", "ach.sort.progressDesc", "ach.sort.progressAsc", "ach.sort.completedFirst", "col.search.label", "col.search.placeholder", "col.filter.label", "col.filter.all", "col.filter.hasRecord", "col.filter.noRecord", "col.filter.unknown", "col.sort.label", "col.sort.source", "col.sort.name", "col.sort.recordDesc", "locale.label", "locale.auto", "locale.loading", "locale.unverified", "file.open", "file.status", "file.backup", "file.export", "edit.preview", "edit.apply", "edit.undo", "edit.redo", "edit.reset", "edit.complete", "edit.revoke", "edit.collect", "edit.uncollect", "edit.progress", "edit.date", "edit.collectionDate", "edit.batch", "edit.selected", "state.unknown", "state.unverified", "state.unsupported", "state.notRecorded", "state.absentRef", "state.missingText", "state.writerOff", "state.previewOnly", "warning.linkage", "warning.history", "warning.reward", "error.file", "error.version", "error.stale", "error.integrity", "error.locale", "privacy.local", "credits.notice", "col.grid.empty", "col.image.label", "col.image.unverified", "col.image.unknown", "col.image.status", "col.grid.recorded", "col.grid.parentReference", "col.grid.unmatched", "r3.detail.preview", "r4.ach.preview", "r4.ach.selection", "r4.ach.unselected", "ach.row.unknownName", "ach.row.externalImageUnknown", "r4.ach.limit", "ach.list.more", "ach.row.image.label", "ach.row.image.unverified", "ach.row.image.status", "ach.row.status.missing", "ach.row.aria", "ach.row.subtitle.missing", "ach.row.subtitle.document", "ach.list.unreadable", "ach.list.noMatch", "ach.list.unloaded", "col.item.search.placeholder", "col.item.search.label", "col.item.history.label", "col.item.sort.label", "col.item.sort.internal", "col.item.sort.id", "col.item.inspect", "col.item.empty", "col.item.guid", "col.item.history.presence", "col.item.history.rawTicks", "col.item.history.calendar", "col.item.history.unknownHint", "col.item.previewHint", "col.item.list.caption", "ach.detail.heading", "ach.detail.empty", "ach.detail.missingHint", "ach.detail.definitionMatch", "ach.detail.matched", "ach.detail.unknownValue", "ach.detail.unset", "ach.linkage.heading", "ach.linkage.requiredConfirmed", "ach.linkage.requiredCandidate", "ach.linkage.related", "ach.linkage.unknown", "ach.linkage.hint", "ach.facts.heading", "ach.facts.definitionHeading", "ach.facts.builtinHint", "ach.facts.groupHint", "ach.facts.dlcHint", "ach.facts.groupNameHint", "ach.facts.counterUnknown", "ach.facts.counterAbsent", "ach.facts.counterNull", "ach.facts.rewardUnknown", "ach.facts.rewardNone", "ach.facts.childMissing", "ach.facts.childIncomplete", "ach.facts.groupProgress", "col.item.image.label", "col.definition.image.label", "col.item.image.unverified", "col.item.image.status", "col.item.history.recorded", "col.item.history.absent", "col.item.history.status", "col.item.ticks", "col.item.calendarUnknown", "col.item.parent", "col.item.parentCross", "col.item.history.rawUnknown", "ach.detail.unknownDefinition", "ach.linkage.count", "ach.linkage.unverifiedCount", "ach.linkage.systemCount", "ach.facts.internalKey", "ach.facts.membersHeading", "ach.facts.membersLabel", "ach.facts.definitionUnknown", "ach.facts.groupUnknown", "ach.facts.counterName", "ach.facts.threshold", "ach.facts.builtin", "ach.facts.counterGuid", "ach.facts.counterSaved", "ach.facts.counterDocument", "ach.facts.onlyUniques", "ach.facts.countedGuids", "ach.facts.countedValues", "ach.facts.rewardDefinition", "ach.facts.rewardReceipt", "ach.facts.rewardValue", "ach.facts.rewardZero", "ach.facts.groupName", "ach.facts.referenceCount", "ach.facts.savedCompletion", "ach.facts.groupCounter", "ach.facts.groupGuid", "ach.facts.definitionGuid", "ach.facts.groupAbsent", "ach.detail.statusLabel", "locale.previewScope", "locale.storageUnavailable"]), zi = Kr.length;
async function Fi(e, t, r) {
  if (typeof t != "string" || !Object.hasOwn(Ct, t) || !(e instanceof Uint8Array) || e.length === 0 || e.length > 65536) throw Error("EDITOR_CATALOG_CONTRACT");
  const n = Uint8Array.from(e), i = await r(n.slice());
  if (i !== Ct[t]) throw Error("EDITOR_CATALOG_SHA");
  const a = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(n));
  if (!a || Object.getPrototypeOf(a) !== Object.prototype || Object.keys(a).length !== zi || !Kr.every((l) => Object.hasOwn(a, l) && typeof a[l] == "string" && a[l].trim())) throw Error("EDITOR_CATALOG_KEYS");
  return Object.freeze({ digest: i, catalog: Object.freeze(a) });
}
const Wr = Object.freeze([{ id: "en", nativeName: "English", htmlLang: "en", direction: "ltr" }, { id: "en-GB", nativeName: "English (UK)", htmlLang: "en-GB", direction: "ltr" }, { id: "ja", nativeName: "日本語", htmlLang: "ja", direction: "ltr" }, { id: "de", nativeName: "Deutsch", htmlLang: "de", direction: "ltr" }, { id: "fr", nativeName: "Français", htmlLang: "fr", direction: "ltr" }, { id: "fr-CA", nativeName: "Français (Canada)", htmlLang: "fr-CA", direction: "ltr" }, { id: "es", nativeName: "Español", htmlLang: "es", direction: "ltr" }, { id: "it", nativeName: "Italiano", htmlLang: "it", direction: "ltr" }, { id: "nl", nativeName: "Nederlands", htmlLang: "nl", direction: "ltr" }, { id: "pt-BR", nativeName: "Português (Brasil)", htmlLang: "pt-BR", direction: "ltr" }, { id: "ru", nativeName: "Русский", htmlLang: "ru", direction: "ltr" }, { id: "tr", nativeName: "Türkçe", htmlLang: "tr", direction: "ltr" }, { id: "ko", nativeName: "한국어", htmlLang: "ko", direction: "ltr" }, { id: "zh-Hans", nativeName: "简体中文", htmlLang: "zh-Hans", direction: "ltr" }, { id: "zh-Hant", nativeName: "繁體中文", htmlLang: "zh-Hant", direction: "ltr" }].map(Object.freeze)), Xr = [
  ["achievementFilter", "ach.filter.label", "達成状況", [["all", "ach.filter.all", "すべて"], ["complete", "ach.filter.complete", "達成済み"], ["incomplete", "ach.filter.incomplete", "未達成"], ["missing", "ach.filter.missing", "定義のみ・未保存"], ["unknown-source", "ach.filter.unknownSource", "保存済み・定義UNKNOWN"]]],
  ["achievementImageFilter", "ach.image.label", "実績画像で絞り込み", [["all", "ach.image.all", "全画像状態"], ["exact", "ach.image.exact", "直接画像あり"], ["source-null", "ach.image.sourceNull", "直接画像 SOURCE_NULL"], ["unknown", "ach.image.unknown", "画像未照合"]]],
  ["achievementSort", "ach.sort.label", "実績の並び順", [["source", "ach.sort.source", "元の順番"], ["name", "ach.sort.name", "名称順"], ["progress-desc", "ach.sort.progressDesc", "進捗値の大きい順"], ["progress-asc", "ach.sort.progressAsc", "進捗値の小さい順"], ["completed-first", "ach.sort.completedFirst", "達成済みを先頭"]]],
  ["collectionStatusFilter", "col.filter.label", "コレクション収集履歴で絞り込み", [["all", "col.filter.all", "全カテゴリ"], ["has-record", "col.filter.hasRecord", "収集履歴あり"], ["no-record", "col.filter.noRecord", "収集履歴なし"], ["unknown", "col.filter.unknown", "未照合"]]],
  ["collectionSort", "col.sort.label", "コレクションの並び順", [["source", "col.sort.source", "定義順"], ["name", "col.sort.name", "名称順"], ["record-desc", "col.sort.recordDesc", "記録ID数の多い順"]]]
], F = (e) => {
  if (!e) throw Error("PRODUCT_LOCALE_CHROME_CONTRACT");
}, Hi = [["#achTab > span", "text", "nav.achievements", "アチーブメント"], ["#colTab > span", "text", "nav.collections", "コレクション"], ['.primary-tabs[role="tablist"]', "aria-label", "nav.tabs", "表示する機能"], ["#achievementSearch", "aria-label", "ach.search.label", "実績を検索"], ["#collectionSearch", "aria-label", "col.search.label", "コレクションカテゴリを検索"], ["#collectionSearch", "placeholder", "col.search.placeholder", "コレクションカテゴリを検索"], ...Xr.flatMap(([e, t, r, n]) => [["#" + e, "aria-label", t, r], ...n.map(([i, a, l]) => ["#" + e + ' option[value="' + i + '"]', "text", a, l])])], Oe = Object.freeze(Hi.map((e) => Object.freeze(e))), Bi = ["locale.label", "locale.auto", "locale.loading", "locale.unverified", "error.locale", "locale.previewScope", "locale.storageUnavailable"], Qr =                 new WeakSet();
async function Vi(e, t, r) {
  const { catalog: n } = await Fi(e, t, r);
  for (const a of [...Oe.map((l) => l[2]), ...Bi]) F(Object.hasOwn(n, a) && typeof n[a] == "string" && n[a].trim() && !/[{}]/.test(n[a]));
  const i = Object.freeze({ locale: t, catalog: Object.freeze(n) });
  return Qr.add(i), i;
}
const et = (e, t) => t === "text" ? e.textContent : e.getAttribute(t), It = (e) => (F(e.childNodes.length === 1 && e.childNodes[0].nodeType === 3 && e.childNodes[0].parentNode === e), e.childNodes[0]), ar = (e, t) => {
  const { n: r, p: n, textNode: i } = e;
  i ? (F(It(r) === i), i.data = t) : n === "text" ? r.textContent = t : t === null ? r.removeAttribute(n) : r.setAttribute(n, t);
}, bt = (e, t) => e.length === t.length && e.every((r, n) => r === t[n]);
function Gi(e) {
  const t = (c) => {
    const u = e.querySelectorAll(c);
    return F(u.length === 1), u[0];
  }, r = () => {
    const c = t("#achTab"), u = t("#colTab"), w = t("#achPanel"), A = t("#colPanel"), _ = t("#achievementSearch"), d = t("#collectionSearch");
    F(c.tagName === "BUTTON" && u.tagName === "BUTTON" && c.getAttribute("role") === "tab" && u.getAttribute("role") === "tab" && c.getAttribute("aria-controls") === "achPanel" && u.getAttribute("aria-controls") === "colPanel" && _.type === "search" && d.type === "search" && _.getAttribute("placeholder") === "日本語名・英語名・GUIDで検索");
    const b = Xr.map(([g, , , E]) => {
      const m = t("#" + g);
      return F(m.tagName === "SELECT" && bt(Array.from(m.options, (L) => L.value), E.map((L) => L[0]))), m;
    });
    return [c, u, w, A, _, d, ...b];
  }, n = r(), i = Oe.map(([c]) => t(c)), a = [...new Set(i)].map((c) => [c, c.getAttribute("lang")]), l = Oe.map(([, c], u) => ({ n: i[u], p: c, original: et(i[u], c), parent: i[u].parentElement, textNode: c === "text" && i[u].tagName === "OPTION" ? It(i[u]) : null }));
  F(l.every((c, u) => c.original === Oe[u][3]));
  for (const [c, u] of l.entries()) u.p === "text" && F(u.n.children.length === 0);
  l.push(...a.map(([c, u]) => ({ n: c, p: "lang", original: u, parent: c.parentElement })));
  let s = l.map((c) => c.original), o = null, f = !1;
  function h() {
    F(bt(r(), n) && i.every((c, u) => t(Oe[u][0]) === c) && l.every((c) => !c.textNode || It(c.n) === c.textNode));
  }
  function v() {
    const [c, u, w, A, _, d, ...b] = n;
    return [e.activeElement, c.getAttribute("aria-selected"), u.getAttribute("aria-selected"), c.tabIndex, u.tabIndex, c.className, u.className, w.hidden, A.hidden, ...[_, d].flatMap((g) => [g.value, g.selectionStart, g.selectionEnd, g.selectionDirection, g.disabled]), ...b.flatMap((g) => [g.value, g.selectedIndex, g.disabled, g.hidden])];
  }
  function p(c, u) {
    F(!f), f = !0;
    const w = [];
    try {
      h(), F(l.every((_, d) => et(_.n, _.p) === s[d]));
      const A = v();
      for (const [_, d] of l.entries()) s[_] !== c[_] && (w.push(_), ar(d, c[_]));
      return h(), F(bt(v(), A) && l.every((_, d) => et(_.n, _.p) === c[d])), s = c, o = u, !0;
    } catch (A) {
      for (const _ of w.reverse()) {
        const d = l[_];
        try {
          d.n.isConnected && d.n.parentElement === d.parent && et(d.n, d.p) === c[_] && ar(d, s[_]);
        } catch {
        }
      }
      throw A;
    } finally {
      f = !1;
    }
  }
  return Object.freeze({ get active() {
    return o;
  }, apply(c) {
    return F(Qr.has(c) && Wr.some((u) => u.id === c.locale)), p([...Oe.map((u) => c.catalog[u[2]]), ...a.map(() => c.locale)], c.locale);
  }, reset() {
    return p(l.map((c) => c.original), null);
  } });
}
function Yi(e) {
  const t = Gi(e.doc), r = e.header.createProductAchievementHeaderR8(e.doc), n =                 new Map();
  let i = 0, a = null, l = null, s = !1, o = !1, f = null, h = null;
  const v = () => h !== null && h.panel === e.doc.getElementById("editorPanel") && h.readSelected() === h.selected && (h.record === null || h.record.guid === h.selected);
  function p(_) {
    const d = h;
    return !d || !v() ? !1 : r.render(d.panel, () => {
      if (h !== d || !v()) throw Error("ROOT_HEADER_STALE");
      return { record: d.record, locale: _ };
    }) === "APPLIED";
  }
  function c(_) {
    if (i >= Number.MAX_SAFE_INTEGER) throw Error("ROOT_LOCALE_EPOCH_EXHAUSTED");
    return Object.freeze({ epoch: ++i, catalog: _ });
  }
  function u(_) {
    if (s || o) throw Error("ROOT_LOCALE_BLOCKED");
    if (_ === a) return;
    const d = a, b = l, g = _ ? c(_.header) : null;
    o = !0;
    let E = !1, m = !1, L = !1;
    try {
      _ ? t.apply(_.verified) : t.reset();
      const y = _ && g ? Object.freeze({ epoch: g.epoch, catalog: _.category }) : null;
      if (e.category.paintLocale(y) !== "APPLIED") throw Error("ROOT_CATEGORY_RETAINED");
      E = !0;
      const N = _ && g ? Object.freeze({ epoch: g.epoch, catalog: _.items }) : null;
      if (e.items.paintLocale(N) !== "APPLIED") throw Error("ROOT_ITEMS_RETAINED");
      m = !0;
      const I = _ && g ? Object.freeze({ epoch: g.epoch, catalog: _.achievementList }) : null;
      if (e.achievementList.paintLocale(I) !== "APPLIED") throw Error("ROOT_ACHIEVEMENT_LIST_RETAINED");
      if (L = !0, !p(g)) throw Error("ROOT_HEADER_RETAINED");
      a = _, l = g, f = _ && g ? Object.freeze({ epoch: g.epoch, locale: _.locale, sha256: Ct[_.locale], catalog: _.verified.catalog }) : null;
    } catch (y) {
      let N = null;
      if (d && (E || m || L))
        try {
          N = c(d.header);
        } catch {
          s = !0;
        }
      if (L)
        try {
          if (d && !N) throw Error("ROOT_ACHIEVEMENT_LIST_ROLLBACK_EPOCH");
          const I = d && N ? Object.freeze({ epoch: N.epoch, catalog: d.achievementList }) : null;
          if (e.achievementList.paintLocale(I) !== "APPLIED") throw Error("ROOT_ACHIEVEMENT_LIST_ROLLBACK_RETAINED");
        } catch {
          s = !0;
        }
      if (m)
        try {
          if (d && !N) throw Error("ROOT_ITEMS_ROLLBACK_EPOCH");
          const I = d && N ? Object.freeze({ epoch: N.epoch, catalog: d.items }) : null;
          if (e.items.paintLocale(I) !== "APPLIED") throw Error("ROOT_ITEMS_ROLLBACK_RETAINED");
        } catch {
          s = !0;
        }
      if (E)
        try {
          if (d && !N) throw Error("ROOT_CATEGORY_ROLLBACK_EPOCH");
          const I = d && N ? Object.freeze({ epoch: N.epoch, catalog: d.category }) : null;
          if (e.category.paintLocale(I) !== "APPLIED") throw Error("ROOT_CATEGORY_ROLLBACK_RETAINED");
        } catch {
          s = !0;
        }
      try {
        d ? t.apply(d.verified) : t.reset();
      } catch {
        s = !0;
      }
      throw a = d, l = b, y;
    } finally {
      o = !1;
    }
  }
  const w = Ui({
    runtime: e.runtime,
    registry: Wr,
    storage: e.storage,
    browser: e.browser,
    fetchVerified: async (_, d) => {
      const b = Uint8Array.from(await e.load(d)), g = await Vi(b, d, e.sha256), E = await e.header.verifyHeaderCatalog(b, d, e.sha256), m = await e.category.verifyCategoryCatalog(b, d, e.sha256), L = await e.items.verifyItemsCatalog(b, d, e.sha256), y = await e.achievementList.verifyAchievementListCatalog(b, d, e.sha256), N = n.get(d);
      if (N) return N;
      const I = Object.freeze({ version: "3.0.1", locale: d, verified: g, header: E, category: m, items: L, achievementList: y });
      return n.set(d, I), I;
    },
    documentLanguage: (_) => {
      const d = n.get(_);
      if (!d) throw Error("ROOT_LOCALE_UNVERIFIED");
      u(d);
    }
  }), A = w.subscribe((_) => {
    if (_.status !== "READY")
      try {
        u(_.active?.pack ?? null);
      } catch {
        s = !0;
      }
  });
  return Object.freeze({
    consumer: w,
    get blocked() {
      return s;
    },
    get generation() {
      return l?.epoch ?? null;
    },
    readFilterLocale() {
      if (s || o) throw Error("ROOT_LOCALE_FILTER_TRANSITION");
      return f;
    },
    renderHeader(_) {
      const d = _.readSelected();
      return h = Object.freeze({ ..._, record: _.record ? Object.freeze({ ..._.record }) : null, selected: d }), s || o || !l ? "LEGACY_RETAINED" : p(l) ? "APPLIED" : "LEGACY_RETAINED";
    },
    close() {
      w.close(), A();
      try {
        a && u(null);
      } catch {
        s = !0;
      }
      h = null, n.clear();
    }
  });
}
function Ki(e, t, r) {
  if (e !== t.doc.getElementById("hkiaLocaleChrome") || e.childNodes.length) throw Error("ROOT_LOCALE_HOST");
  const n = Yi(t);
  n.renderHeader(r);
  const i = _i(Mi, { target: e, props: { controller: n } });
  try {
    zn();
  } catch (l) {
    throw n.close(), tr(i).catch(() => {
    }), l;
  }
  let a = !1;
  return Object.freeze({
    readFilterLocale: () => a ? null : n.readFilterLocale(),
    renderHeader: (l) => a ? "LEGACY_RETAINED" : n.renderHeader(l),
    dispose() {
      a || (a = !0, n.close(), tr(i).catch(() => {
      }));
    }
  });
}
export {
  Ki as mountProductLocaleRoot192
};
