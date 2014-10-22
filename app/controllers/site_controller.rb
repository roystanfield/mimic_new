class SiteController < ApplicationController

  def index
  end

  def artwork
    render :layout => 'artwork_layout'
  end

  def fourteen
    render :layout => 'fourteen_layout'
  end

  # def mixel_acquired_by_etsy
  #   render :layout => false
  # end

  # def sound_and_vision
  #   render :layout => false
  # end

end