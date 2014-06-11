/**
 * @name MarkerWithLabel for V3
 * @version 1.1.8 [February 26, 2013]
 * @author Gary Little (inspired by code from Marc Ridey of Google).
 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
 *  <code>google.maps.Marker</code> class.
 *  <p>
 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
 *  if the marker is draggable, so too will be the label. In addition, a marker with a label
 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
 *  events and "property changed" events just as a regular marker would. Version 1.1 adds
 *  support for the raiseOnDrag feature introduced in API V3.3.
 *  <p>
 *  If you drag a marker by its label, you can cancel the drag and return the marker to its
 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global document,google */

/**
 * This constructor creates a label and associates it with a marker.
 * It is for the private use of the MarkerWithLabel class.
 * @constructor
 * @param {Marker} marker The marker with which the label is to be associated.
 * @param {string} crossURL The URL of the cross image =.
 * @param {string} handCursor The URL of the hand cursor.
 * @private
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8 u(c,b,a){2.3=c;2.2o=c.3c;2.6=J.1u("1M");2.6.4.T="12: 1D; 18: 1I;";2.q=J.1u("1M");2.q.4.T=2.6.4.T;2.q.21("2S","1r w;");2.q.21("2F","1r w;");2.R=u.N(b)}u.v=V 7.5.3n();u.N=8(b){t a;9(B u.N.1y==="C"){a=J.1u("36");a.4.T="12: 1D; z-2Z: 2X; M: 17;";a.4.1p="-2Q";a.4.1m="-2M";a.2L=b;u.N.1y=a}1r u.N.1y};u.v.2I=8(){t g=2;t m=w;t c=w;t f;t j,1h;t p;t d;t h;t o;t n=20;t i="2v("+2.2o+")";t k=8(e){9(e.2p){e.2p()}e.3m=F;9(e.2m){e.2m()}};t l=8(){g.3.2l(3f)};2.1E().2j.W(2.6);2.1E().38.W(2.q);9(B u.N.2e==="C"){2.1E().2j.W(2.R);u.N.2e=F}2.1c=[7.5.r.P(2.q,"2b",8(e){9(g.3.U()||g.3.X()){2.4.15="28";7.5.r.D(g.3,"2b",e)}}),7.5.r.P(2.q,"23",8(e){9((g.3.U()||g.3.X())&&!c){2.4.15=g.3.2U();7.5.r.D(g.3,"23",e)}}),7.5.r.P(2.q,"1Y",8(e){c=w;9(g.3.U()){m=F;2.4.15=i}9(g.3.U()||g.3.X()){7.5.r.D(g.3,"1Y",e);k(e)}}),7.5.r.P(J,"1o",8(a){t b;9(m){m=w;g.q.4.15="28";7.5.r.D(g.3,"1o",a)}9(c){9(d){b=g.Z().1q(g.3.Q());b.y+=n;g.3.K(g.Z().1T(b));2K{g.3.2l(7.5.2J.2H);2G(l,2E)}2C(e){}}g.R.4.M="17";g.3.11(f);p=F;c=w;a.L=g.3.Q();7.5.r.D(g.3,"1L",a)}}),7.5.r.A(g.3.1i(),"2z",8(a){t b;9(m){9(c){a.L=V 7.5.2y(a.L.1g()-j,a.L.1f()-1h);b=g.Z().1q(a.L);9(d){g.R.4.16=b.x+"E";g.R.4.S=b.y+"E";g.R.4.M="";b.y-=n}g.3.K(g.Z().1T(b));9(d){g.q.4.S=(b.y+n)+"E"}7.5.r.D(g.3,"1J",a)}Y{j=a.L.1g()-g.3.Q().1g();1h=a.L.1f()-g.3.Q().1f();f=g.3.1d();h=g.3.Q();o=g.3.1i().2x();d=g.3.H("14");c=F;g.3.11(1H);a.L=g.3.Q();7.5.r.D(g.3,"1G",a)}}}),7.5.r.P(J,"2w",8(e){9(c){9(e.2u===27){d=w;g.3.K(h);g.3.1i().2t(o);7.5.r.D(J,"1o",e)}}}),7.5.r.P(2.q,"1F",8(e){9(g.3.U()||g.3.X()){9(p){p=w}Y{7.5.r.D(g.3,"1F",e);k(e)}}}),7.5.r.P(2.q,"2q",8(e){9(g.3.U()||g.3.X()){7.5.r.D(g.3,"2q",e);k(e)}}),7.5.r.A(2.3,"1G",8(a){9(!c){d=2.H("14")}}),7.5.r.A(2.3,"1J",8(a){9(!c){9(d){g.K(n);g.6.4.O=1H+(2.H("1b")?-1:+1)}}}),7.5.r.A(2.3,"1L",8(a){9(!c){9(d){g.K(0)}}}),7.5.r.A(2.3,"3l",8(){g.K()}),7.5.r.A(2.3,"3k",8(){g.11()}),7.5.r.A(2.3,"3j",8(){g.1a()}),7.5.r.A(2.3,"3i",8(){g.1a()}),7.5.r.A(2.3,"3h",8(){g.1C()}),7.5.r.A(2.3,"3g",8(){g.1B()}),7.5.r.A(2.3,"3d",8(){g.1w()}),7.5.r.A(2.3,"3b",8(){g.19()}),7.5.r.A(2.3,"3a",8(){g.19()})]};u.v.39=8(){t i;2.6.2h.2r(2.6);2.q.2h.2r(2.q);2s(i=0;i<2.1c.37;i++){7.5.r.35(2.1c[i])}};u.v.34=8(){2.1B();2.1C();2.19()};u.v.1B=8(){t a=2.3.H("1v");9(B a.33==="C"){2.6.13=a;2.q.13=2.6.13}Y{2.6.13="";2.6.W(a);a=a.32(F);2.q.W(a)}};u.v.1C=8(){2.q.31=2.3.30()||""};u.v.19=8(){t i,G;2.6.1t=2.3.H("1s");2.q.1t=2.6.1t;2.6.4.T="";2.q.4.T="";G=2.3.H("G");2s(i 2Y G){9(G.2V(i)){2.6.4[i]=G[i];2.q.4[i]=G[i]}}2.2a()};u.v.2a=8(){2.6.4.12="1D";2.6.4.18="1I";9(B 2.6.4.I!=="C"&&2.6.4.I!==""){2.6.4.29="\\"26:25.24.1O(I="+(2.6.4.I*22)+")\\"";2.6.4.2c="1Z(I="+(2.6.4.I*22)+")"}2.q.4.12=2.6.4.12;2.q.4.18=2.6.4.18;2.q.4.I=0.2T;2.q.4.29="\\"26:25.24.1O(I=1)\\"";2.q.4.2c="1Z(I=1)";2.1w();2.K();2.1a()};u.v.1w=8(){t a=2.3.H("1l");2.6.4.1p=-a.x+"E";2.6.4.1m=-a.y+"E";2.q.4.1p=-a.x+"E";2.q.4.1m=-a.y+"E"};u.v.K=8(a){t b=2.Z().1q(2.3.Q());9(B a==="C"){a=0}2.6.4.16=1X.1W(b.x)+"E";2.6.4.S=1X.1W(b.y-a)+"E";2.q.4.16=2.6.4.16;2.q.4.S=2.6.4.S;2.11()};u.v.11=8(){t a=(2.3.H("1b")?-1:+1);9(B 2.3.1d()==="C"){2.6.4.O=2R(2.6.4.S,10)+a;2.q.4.O=2.6.4.O}Y{2.6.4.O=2.3.1d()+a;2.q.4.O=2.6.4.O}};u.v.1a=8(){9(2.3.H("1n")){2.6.4.M=2.3.2P()?"2W":"17"}Y{2.6.4.M="17"}2.q.4.M=2.6.4.M};8 1k(a){a=a||{};a.1v=a.1v||"";a.1l=a.1l||V 7.5.2O(0,0);a.1s=a.1s||"2N";a.G=a.G||{};a.1b=a.1b||w;9(B a.1n==="C"){a.1n=F}9(B a.14==="C"){a.14=F}9(B a.1V==="C"){a.1V=F}9(B a.1U==="C"){a.1U=w}9(B a.1z==="C"){a.1z=w}a.1e=a.1e||"2d"+(J.1S.1R==="1Q:"?"s":"")+"://5.1P.2f/2k/2i/2g/2D.3e";a.1x=a.1x||"2d"+(J.1S.1R==="1Q:"?"s":"")+"://5.1P.2f/2k/2i/2g/2B.2A";a.1z=w;2.1N=V u(2,a.1e,a.1x);7.5.1A.1K(2,2n)}1k.v=V 7.5.1A();1k.v.1j=8(a){7.5.1A.v.1j.1K(2,2n);2.1N.1j(a)};',62,210,'||this|marker_|style|maps|labelDiv_|google|function|if|||||||||||||||||eventDiv_|event||var|MarkerLabel_|prototype|false||||addListener|typeof|undefined|trigger|px|true|labelStyle|get|opacity|document|setPosition|latLng|display|getSharedCross|zIndex|addDomListener|getPosition|crossDiv_|top|cssText|getDraggable|new|appendChild|getClickable|else|getProjection||setZIndex|position|innerHTML|raiseOnDrag|cursor|left|none|overflow|setStyles|setVisible|labelInBackground|listeners_|getZIndex|crossImage|lng|lat|cLngOffset|getMap|setMap|MarkerWithLabel|labelAnchor|marginTop|labelVisible|mouseup|marginLeft|fromLatLngToDivPixel|return|labelClass|className|createElement|labelContent|setAnchor|handCursor|crossDiv|optimized|Marker|setContent|setTitle|absolute|getPanes|click|dragstart|1000000|hidden|drag|apply|dragend|div|label|Alpha|gstatic|https|protocol|location|fromDivPixelToLatLng|draggable|clickable|round|Math|mousedown|alpha||setAttribute|100|mouseout|Microsoft|DXImageTransform|progid||pointer|MsFilter|setMandatoryStyles|mouseover|filter|http|processed|com|mapfiles|parentNode|en_us|overlayImage|intl|setAnimation|stopPropagation|arguments|handCursorURL_|preventDefault|dblclick|removeChild|for|setCenter|keyCode|url|keydown|getCenter|LatLng|mousemove|cur|closedhand_8_8|catch|drag_cross_67_16|1406|ondragstart|setTimeout|BOUNCE|onAdd|Animation|try|src|9px|markerLabels|Point|getVisible|8px|parseInt|onselectstart|01|getCursor|hasOwnProperty|block|1000002|in|index|getTitle|title|cloneNode|nodeType|draw|removeListener|img|length|overlayMouseTarget|onRemove|labelstyle_changed|labelclass_changed|handCursorURL|labelanchor_changed|png|null|labelcontent_changed|title_changed|labelvisible_changed|visible_changed|zindex_changed|position_changed|cancelBubble|OverlayView'.split('|'),0,{}))