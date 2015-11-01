class PagesController < ApplicationController
  http_basic_authenticate_with name: "raybarbee", password: "minirat"
  
  def etsy_native
  end
end
