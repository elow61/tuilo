
export default function recolor(body, primary, secondary) {

  let newBody = body.replace('currentColor', primary);

  if (newBody.includes('opacity')) {
    newBody = newBody.replace('opacity=".2"', `fill="${secondary}"`);
  }
  return newBody
}
