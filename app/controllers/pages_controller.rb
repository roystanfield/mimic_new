class PagesController < ApplicationController
  http_basic_authenticate_with name: "raybarbee", password: "minirats"

  def etsy_native
  end
end
