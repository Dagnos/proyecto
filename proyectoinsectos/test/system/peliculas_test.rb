require "application_system_test_case"

class PeliculasTest < ApplicationSystemTestCase
  setup do
    @pelicula = peliculas(:one)
  end

  test "visiting the index" do
    visit peliculas_url
    assert_selector "h1", text: "Peliculas"
  end

  test "creating a Pelicula" do
    visit peliculas_url
    click_on "New Pelicula"

    fill_in "Año", with: @pelicula.año
    fill_in "Calidad", with: @pelicula.calidad
    fill_in "Categoria", with: @pelicula.categoria
    fill_in "Nombre", with: @pelicula.nombre
    fill_in "Synopsis", with: @pelicula.synopsis
    fill_in "Url", with: @pelicula.url
    click_on "Create Pelicula"

    assert_text "Pelicula was successfully created"
    click_on "Back"
  end

  test "updating a Pelicula" do
    visit peliculas_url
    click_on "Edit", match: :first

    fill_in "Año", with: @pelicula.año
    fill_in "Calidad", with: @pelicula.calidad
    fill_in "Categoria", with: @pelicula.categoria
    fill_in "Nombre", with: @pelicula.nombre
    fill_in "Synopsis", with: @pelicula.synopsis
    fill_in "Url", with: @pelicula.url
    click_on "Update Pelicula"

    assert_text "Pelicula was successfully updated"
    click_on "Back"
  end

  test "destroying a Pelicula" do
    visit peliculas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Pelicula was successfully destroyed"
  end
end
