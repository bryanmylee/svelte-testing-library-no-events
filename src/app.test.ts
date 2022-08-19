import {render, screen, fireEvent} from '@testing-library/svelte';
import {it, expect} from 'vitest';
import App from './App.svelte';

it('shows hidden content on click', async () => {
	render(App);
	const button = screen.getByText('Try me');
	expect(button).toBeInTheDocument();
	await fireEvent.click(button);
	expect(await screen.findByText('Hello')).toBeInTheDocument();
});
