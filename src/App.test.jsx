import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => { 
  it('should find a character named Sora', async () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )
    
    const link = screen.getByText('View List')
    userEvent.click(link);

    await waitForElementToBeRemoved(screen.getByAltText(/loading spinner/i));

    const characterLink = await screen.findByText('Sora');
    screen.debug();

    userEvent.click(characterLink);
  });
});