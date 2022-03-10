import { invertColor } from './../helpers.js';
import { YearDisplay } from './../helpers.js';

export const LegoDetail = (brick) => {
  const link = brick.ColorstreamLinkImage;

  let block = `<section style="background-color:#${brick.ColorHex}">
                <div class="blockname">
                  ${link ? `<div><img src="./images/legoblock.png"></div>` : ""}
                  <h3>Name: ${brick.LegoName.toUpperCase()}</h3>
                </div>
                <div class="block-years">Manufactured ${YearDisplay(brick.YearFrom, brick.YearTo)}</div>
              <em>Notes</em>: ${brick.Notes}</section>`;
  

  if (link) {
    //true? wrap the block in an a tag
    return `
    <article class="block-wrapper">
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>
    </article>`
  } else {
    //false? return the block
    return `
    <article class="block-wrapper">
      ${block}
    </article>`
  }
}