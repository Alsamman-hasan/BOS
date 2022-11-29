import { memo, useCallback, useEffect, useState } from "react";
import "./SearchInput.scss";

import { useTranslation } from "react-i18next";
import { Autocomplete, AutocompleteRenderInputParams, createFilterOptions, Typography } from '@mui/material';
import SearchIcon from "shared/assets/icons/SearchIcon.svg"
import { Button } from 'shared/ui/Buttons/Button';
import { FilmOptionType, top100Films } from './constants';
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
// import { useHistory } from "react-router";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { getAutocomplete } from "../../redux/products/actions";
// import {
//   changeSearchQuery, setAutocomplete, setProducts,
//   setSelectedCategories,
// } from "../../redux/products/slice";
// import useDebouncedFunction from "../../hooks/useDebouncedFunction";

const filter = createFilterOptions<FilmOptionType>();

export const SearchInput = memo(() => {
  // const history = useHistory();
  // const dispatch = useAppDispatch();
  const { t } = useTranslation();

  // const { autocomplete } = useAppSelector((state) => state.products);

  const [searchText, setSearchText] = useState("");
  const [value, setValue] = useState<FilmOptionType | null>(null);
  // const getAutocompleteWithDelay = useDebouncedFunction((value: any) => {
  //   dispatch(getAutocomplete({ searchQuery: value }));
  // }, 1500);

  // useEffect(() => {
  //   if (history.location.pathname !== "/catalog") {
  //     setSearchText("");
  //     setAutocompleteInputValue(null);
  //     dispatch(changeSearchQuery(""));
  //     dispatch(setAutocomplete([]));
  //     dispatch(setSelectedCategories([]));
  //     dispatch(setProducts([]))
  //   }
  // }, [history.location.pathname]);

  const handleSearch = (searchQuery: string) => {
    console.log(searchQuery);
    if (searchQuery.trim() === "") {
      // setSearchText("");
    } else {

      // dispatch(setSelectedCategories([]));
      // dispatch(changeSearchQuery(searchQuery.trim()));
      // history.push("/catalog");
    }
  };

  const onAutocompleteInputChange = (
    e: React.ChangeEvent<any> | any,
    value: string,
    reason: string
  ) => {
   
    if (reason === "input") {
      setSearchText(value);
      // if (value.length > 3) getAutocompleteWithDelay(value);
    }
    if (reason === "reset") {

      // дописать логику чтобы работало при смене языков
      // history.push(`/catalog/${(autocomplete.find((option) => option.title_ru === value)?.asin)}`);
    }
  };

  const filterOptions = useCallback((options: FilmOptionType[], params:any) => {
  const filtered = filter(options, params);
  const { inputValue } = params;
  const isExisting = options.some((option) => inputValue === option.title);
  if (inputValue !== '' && !isExisting) {
    filtered.push({
      inputValue,
      title: `Serach by "${inputValue}"`,
    });
  }

  return filtered;
}, [])

return (
  <div className="search-input">
    <Autocomplete
      freeSolo
      // open={true}
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      // inputValue={value || ""}
      onInputChange={(e, value, reason) => {
        onAutocompleteInputChange(e, value, reason);
      }}
      filterOptions={(options, params) => filterOptions(options, params)}
      getOptionLabel={(option) => {
        console.log(">>>>");
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) =>
        <Htag
          key={option.title}
          tage={HTypes.H4}
          {...props}
        >
          {option.title}
        </Htag>
      }
      options={top100Films}
      renderInput={(params: AutocompleteRenderInputParams) => {
        return (
          <div ref={params.InputProps.ref} className="input">
            <input
              {...params.inputProps}
              id="search"
              placeholder={`${t("SEARCH")}`}
              type="text"
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') handleSearch(searchText)
              }}
            />
            <label htmlFor='search' style={{ position: "absolute", right: 0 }} className="btnicon">
              <Button className="seartchBtn">
                <SearchIcon onClick={() => handleSearch(searchText)} />
              </Button>
            </label>
          </div>
        );
      }}
    />

  </div>
);
});

