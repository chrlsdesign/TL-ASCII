/**
@author ertdfgcvb
@title  Sin Sin
@desc   Checker variation
*/

const pattern = [
	' _+=+#%@_ ',
	'.+-..-+.      '
]
const col = ['black', 'blue']
const weights = [100, 800]

const { floor, sin, cos, tan } = Math

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.001
	const x = coord.x - context.cols / 3
	const y = coord.y - context.rows / 3
	const o = cos(x * y * 0.002 + y * 0.0033 + t ) * 25
	const i = floor(Math.abs(x + y + o))
	const c = (floor(coord.x * 0.5) + floor(coord.y * .5)) % 2
	return {
		char : pattern[c][i % pattern[c].length],
		color : 'rgba(0,0,0,0.1)', //col[c],
		// backgroundColor : col[(c+1)%2],
		fontWeight : weights[c],
	}
}
