class ApplicationController < ActionController::Base

  helper_method :ipad?
  helper_method :phone?
  helper_method :current_user

  protect_from_forgery

  def ipad?
    request.user_agent.to_s.downcase =~ Regexp.new('ipad')
  end

  def phone?
    request.user_agent.to_s.downcase =~ Regexp.new('android|iphone|ipod')
  end
end
