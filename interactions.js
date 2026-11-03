(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 const halo=document.createElement('div');halo.className='pointer-halo';halo.setAttribute('aria-hidden','true');document.body.append(halo);
 let cursorFrame=0,lastCard=null,point={x:0,y:0},position=null;
 function resetPointer(){cancelAnimationFrame(cursorFrame);cursorFrame=0;position=null;halo.classList.remove('active');if(lastCard){lastCard.style.removeProperty('--pointer-x');lastCard.style.removeProperty('--pointer-y');lastCard=null;}}
 function follow(){cursorFrame=0;if(!position)return;position.x+=(point.x-position.x)*.22;position.y+=(point.y-position.y)*.22;halo.style.transform=`translate3d(${position.x}px,${position.y}px,0)`;if(Math.abs(point.x-position.x)+Math.abs(point.y-position.y)>.15)cursorFrame=requestAnimationFrame(follow);}
 document.addEventListener('pointermove',event=>{if(!fine.matches||reduced.matches||event.pointerType==='touch')return;point={x:event.clientX,y:event.clientY};if(!position)position={...point};halo.classList.add('active');halo.classList.toggle('over-link',!!event.target.closest('a,button'));halo.classList.toggle('over-image',!!event.target.closest('img'));const card=event.target.closest('.card');if(lastCard&&lastCard!==card){lastCard.style.removeProperty('--pointer-x');lastCard.style.removeProperty('--pointer-y')}lastCard=card;if(card){const rect=card.getBoundingClientRect();card.style.setProperty('--pointer-x',`${((event.clientX-rect.left)/rect.width-.5)*6}px`);card.style.setProperty('--pointer-y',`${((event.clientY-rect.top)/rect.height-.5)*6}px`)}if(!cursorFrame)cursorFrame=requestAnimationFrame(follow);},{passive:true});
 document.documentElement.addEventListener('pointerleave',resetPointer);addEventListener('blur',resetPointer);reduced.addEventListener('change',resetPointer);fine.addEventListener('change',resetPointer);document.addEventListener('visibilitychange',()=>{if(document.hidden)resetPointer()});
 const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 let scheduled=false;function update(){scheduled=false;const extent=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${extent>0?Math.min(1,Math.max(0,scrollY/extent)):0})`;}
 function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);update();
 document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{if(reduced.matches)return;document.querySelectorAll('#projects .card').forEach((card,i)=>{card.style.setProperty('--entry-delay',`${Math.min(i,4)*45}ms`);card.classList.add('filter-enter')});schedule()}));
 const dialog=document.createElement('dialog');dialog.className='image-viewer';dialog.innerHTML='<button type="button" class="viewer-close" aria-label="Close image">×</button><img alt="">';document.body.append(dialog);let opener;
 function close(){dialog.close()}
 dialog.querySelector('button').addEventListener('click',close);
 dialog.addEventListener('click',event=>{if(event.target===dialog)close()});
 dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus()});
 document.querySelectorAll('.detail-image').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');function open(){opener=img;const preview=dialog.querySelector('img');preview.src=img.currentSrc||img.src;preview.alt=img.alt;dialog.showModal();document.body.style.overflow='hidden'}img.addEventListener('click',open);img.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open()}})});
})();
