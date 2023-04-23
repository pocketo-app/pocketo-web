import { mergeProps } from 'solid-js'

function AddBookmarkBox(rawProps) {
	const props = mergeProps({ title: '', placeholder: '' }, rawProps)
	return (
		<label class="field mb-zero">
			<input type="url" placeholder={props.placeholder} />
			<span class="label">{props.title}</span>
		</label>
	)
}

export default AddBookmarkBox
