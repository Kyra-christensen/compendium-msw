import fetch from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  characterApiData,
  charactersApiData,
} from './tests/fixtures/CharacterData';

global.fetch = fetch;

const server = setupServer(
  rest.get(`https://animechan.vercel.app/api/quotes`, (req, res, ctx) => res(ctx.json(charactersApiData))
  ),
  rest.get(`https://animechan.vercel.app/api/quotes/character?name=:character`, (req, res, ctx) => {
    const { character } = req.params;
    console.log(character);
    return res(ctx.json(characterApiData));
  })   
);  

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
