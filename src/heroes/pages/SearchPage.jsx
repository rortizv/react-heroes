import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../shared/hooks/useForm";
import { getHeroByName } from "../helpers";
import queryString from 'query-string';
import { HeroCard } from "../components"


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchInput: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 2) {
      return;
    }
    navigate(`?q=${searchText}`);
  }


  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Form</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Find your hero...'
              autoComplete="off"
              name="searchText"
              className='form-control'
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type='submit'
              className='btn mt-2 btn-block btn-outline-primary'
            >
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div className='animate__animated animate__fadeIn'>

            {
              (q === '') &&
              <div className='alert alert-info'>
                Search a Hero
              </div>
            }

            {
              (q !== '' && heroes.length === 0) &&
              <div className='alert alert-danger'>
                No Hero found with <b>{q}</b>
              </div>
            }

            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
            
          </div>
        </div>
      </div>
    </>
  )
}
