(function(){ var modalHTML = '
			<imi-event-modal lang=&quot;en-US&quot; placement=&quot;bottom&quot; class=&quot;predefined-template-modal&quot;>
				<template shadowrootmode=&quot;open&quot;>' + '
					<style>ul, li { margin:0; padding:0; } .splashscreen { position:absolute; left:0; right:0; top:0; bottom:0; display:flex; justify-content:center; align-items:center; } .d-none { display:none !important; } #imi-chat-container { height:100%; } md-menu-overlay::part(overlay-content) { overflow:visible; } #template-tabs::part(tabs-more-list) { max-height:500px !important; height:auto !important; } #tabs-more-list { height:auto !important; } .template-modal-container { display:inline-block; } </style>' + '
					<link rel=&quot;stylesheet&quot; href=&quot;https://wc.imiengage.io/v1.9.4/global.css&quot;>' + '
						<link rel=&quot;stylesheet&quot; href=&quot;https://wc.imiengage.io/v1.9.4/build/svelte-webcomponents.css&quot;>' + '
							<div class=&quot;template-modal-container&quot; role=&quot;listitem&quot;>' + '
								<md-menu-overlay class=&quot;template-comp svelte-rz450a&quot; custom-width=&quot;400px&quot; focus-trap-index=&quot;-1&quot;>' + '
									<template shadowrootmode=&quot;open&quot;>' + '
										<style>:host .md-menu-overlay .overlay-content { max-height: calc(100vh - 48px); width: 400px; overflow-y: auto; }</style>' + '
										<div class=&quot;md-menu-overlay&quot;>' + '
											<slot name=&quot;menu-trigger&quot; aria-expanded=&quot;false&quot;></slot>' + '
											<div part=&quot;overlay&quot; class=&quot;overlay-container&quot; role=&quot;menu&quot;>' + '
												<div id=&quot;arrow&quot; class=&quot;overlay-arrow&quot; data-popper-arrow=&quot;&quot;></div>' + '
												<div class=&quot;overlay-content&quot; part=&quot;overlay-content&quot;>' + '
													<slot></slot>' + '
												</div>' + '
											</div>' + '
										</div>' + '
									</template>' + '
									<md-tooltip slot=&quot;menu-trigger&quot; placement=&quot;top&quot; aria-haspopup=&quot;true&quot;>' + '
										<template shadowrootmode=&quot;open&quot;>' + '
											<div class=&quot;md-tooltip&quot;>' + '
												<div class=&quot;md-tooltip__popper&quot; role=&quot;tooltip&quot; part=&quot;tooltip-popper&quot;>' + '
													<div id=&quot;md-tooltip__content&quot; class=&quot;md-tooltip__content&quot; part=&quot;tooltip-content&quot;>No workflows configured</div>' + '
													<div id=&quot;arrow&quot; class=&quot;md-tooltip__arrow&quot; data-popper-arrow=&quot;&quot;></div>' + '
												</div>' + '
												<div class=&quot;md-tooltip__reference&quot; part=&quot;tooltip_reference&quot; aria-describedby=&quot;md-tooltip__content&quot;>' + '
													<slot></slot>' + '
												</div>' + '
											</div>' + '
										</template>' + '
										<md-button class=&quot;template-comp-trigger md-button svelte-rz450a&quot; hasremovestyle=&quot;&quot; arialabel=&quot;Trigger Workflow&quot;>' + '
											<template shadowrootmode=&quot;open&quot;>' + '
												<button part=&quot;button&quot; id=&quot;eventBtnId&quot; class=&quot;md-button md-button&quot; aria-label=&quot;Trigger Workflow&quot; type=&quot;button&quot; lang=&quot;en&quot;>' + '
													<span part=&quot;button-children&quot; class=&quot;md-button__children&quot;>' + '
														<slot name=&quot;icon&quot;></slot>' + '
														<slot name=&quot;text&quot;></slot>' + '
														<slot></slot>' + '
													</span>' + '
												</button>' + '
											</template>' + '
											<md-badge bgcolor=&quot;var(--md-quaternary-bg-color, --md-quaternary-bg-color-default)&quot;>' + '
												<template shadowrootmode=&quot;open&quot;>' + '
													<style>:host .md-badge { background-color: var(--md-quaternary-bg-color, --md-quaternary-bg-color-default); height:32px; width:32px; }</style>' + '
													<span part=&quot;badge&quot; tabindex=&quot;&quot; class=&quot;md-badge md-badge--circle&quot; aria-label=&quot;&quot;>' + '
														<slot></slot>' + '
													</span>' + '
												</template>' + '
												<md-icon>' + '
													<template shadowrootmode=&quot;open&quot;>' + '
														<i part=&quot;icon&quot; role=&quot;img&quot; class=&quot;md-icon icon icon-event_16&quot; aria-label=&quot;icon&quot; title=&quot;&quot; style=&quot;font-size:16px;&quot;></i>' + '
													</template>' + '
												</md-icon>' + '
											</md-badge>' + '
										</md-button>' + '
									</md-tooltip>' + '
									<div class=&quot;svelte-rz450a&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;>' + '
										<p>0 search results available</p>' + '
									</div>' + '
									<div class=&quot;template-comp-modal-content svelte-rz450a&quot; lang=&quot;en&quot;>' + '
										<h2 class=&quot;event_hdr paddingLB svelte-rz450a&quot;>Workflows</h2>' + '
										<div class=&quot;template-comp-modal-content-input svelte-rz450a&quot;>' + '
											<md-input htmlid=&quot;inputSearchClearPill&quot; containersize=&quot;small-12&quot; arialabel=&quot;Search&quot; name=&quot;&quot; value=&quot;&quot;>' + '
												<template shadowrootmode=&quot;open&quot;>' + '
													<div part=&quot;md-input-container&quot; class=&quot;md-input-container colums small-12&quot;>' + '
														<div class=&quot;md-input__wrapper&quot;>' + '
															<div class=&quot;md-input__before&quot;>' + '
																<md-icon name=&quot;search-bold&quot; size=&quot;16&quot; iconset=&quot;momentumDesign&quot;>' + '
																	<template shadowrootmode=&quot;open&quot;>' + '
																		<div class=&quot;svg-icon-container&quot; role=&quot;img&quot; aria-label=&quot;icon&quot; title=&quot;&quot;>' + '
																			<svg
																				xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16px&quot; height=&quot;16px&quot; viewBox=&quot;0 0 32 32&quot; class=&quot;icon search-bold&quot; part=&quot;icon&quot; fill=&quot;currentColor&quot;>' + '
																				<path d=&quot;M13 2C6.925 2 2 6.925 2 13s4.925 11 11 11c2.678 0 5.132-.957 7.04-2.547l8.253 8.254a1 1 0 0 0 1.414-1.414l-8.254-8.254A10.96 10.96 0 0 0 24 13c0-6.075-4.925-11-11-11M4 13a9 9 0 1 1 18 0 9 9 0 0 1-18 0&quot;></path>' + '
																			</svg>' + '
																		</div>' + '
																	</template>' + '
																</md-icon>' + '
															</div>' + '
															<input part=&quot;input&quot; tabindex=&quot;0&quot; class=&quot;md-input md-input--pill md-input--before&quot; type=&quot;text&quot; aria-label=&quot;Search&quot; placeholder=&quot;Search&quot;>' + '
																<div class=&quot;md-input__after&quot;>' + '
																	<slot name=&quot;input-section-right&quot;></slot>' + '
																</div>' + '
															</div>' + '
														</div>' + '
													</template>' + '
												</md-input>' + '
											</div>' + '
											<div>' + '
												<div class=&quot;no-template svelte-rz450a&quot;>' + '
													<img src=&quot;https://wc.imiengage.io/v1.9.4/img/no_template.svg&quot; alt=&quot;&quot;>' + '
														<div style=&quot;font-weight:bold;font-size:14px;margin-top:8px;&quot;>No Results</div>' + '
													</div>' + '
												</div>' + '
											</div>' + '
										</md-menu-overlay>' + '
									</div>' + '
								</template>
							</imi-event-modal>'; var div = document.createElement('div'); div.innerHTML = modalHTML; document.body.appendChild(div.firstChild); var btn = document.currentScript.parentNode; btn.addEventListener('click', function(){ var modal = document.querySelector('imi-event-modal'); if(modal){ modal.setAttribute('open',''); } });})();" async="">
