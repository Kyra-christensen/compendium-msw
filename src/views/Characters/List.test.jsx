import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';
import { MemoryRouter } from 'react-router-dom'

describe('List', () => { 
  it('should render components', async () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
      )
    
    screen.getByText('Anime Characters');

    screen.getByRole('img', {name: 'loading spinner'});
    
    screen.getByRole('link', {name: 'Back to homepage'})
  })
 })