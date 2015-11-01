require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get etsy_native" do
    get :etsy_native
    assert_response :success
  end

end
