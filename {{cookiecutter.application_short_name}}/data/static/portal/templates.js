!function(){var l=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.temp=l({compiler:[7,">= 4.0.0"],main:function(l,a,e,n,s){var o,t=e.helperMissing,r="function",i=l.escapeExpression;return'<div id="task_submit">\n  <div class="row">\n    <div class="col-sm-9 form-group">\n            <label for="sample-type">Sample Type</label>\n            <label class="radio-inline active">\n              <input type="radio" name="sample-type" value="metagenome" checked="">Metagenome\n            </label>\n            <label class="radio-inline">\n              <input type="radio" name="sample-type" value="amplicon">Amplicon\n            </label>\n        </div>\n    </div>\n <div id="hide_metagenomic">\n  <form class="col-sm-12 form1" id="task_form" onsubmit="return task_submit();">\n      <div style="display:none">\n          <input type="hidden" name="csrfmiddlewaretoken" value="'+i((o=null!=(o=e.csrftoken||(null!=a?a.csrftoken:a))?o:t,typeof o===r?o.call(a,{name:"csrftoken",hash:{},data:s}):o))+'"/>\n          <input type="hidden" name="sample-type" value="metagenome"/>\n     </div>\n    <div class="row">\n        <div class="col-sm-4 form-group required">\n          <label class="control-label" for="sample_name">Sample Name</label>\n          <input id="sample_name" type="text" class="form-control input-sm" name="sample_name" placeholder="Name" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="latitude">Latitude</label>\n          <input type="text" class="form-control input-sm" name="latitude" placeholder="Latitude" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="longitude">Longitude</label>\n          <input type="text" class="form-control input-sm" name="longitude" placeholder="Longitude" >\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-9 form-group">\n            <label  for="corrosion">In Situ Corrosion Level </label>&nbsp;&nbsp;\n            <label class="radio-inline">\n              <input type="radio" name="corrosion" value="High">High\n            </label>\n            <label class="radio-inline">\n              <input type="radio" name="corrosion" value="Moderate">Moderate\n            </label>\n            <label class="radio-inline">\n              <input type="radio" name="corrosion" value="Low">Low\n            </label>\n            <label class="radio-inline active">\n              <input type="radio" name="corrosion" value="Unkown" checked="">Unknown\n            </label>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-9 form-group">\n            <label for="corrosion_rx">Corrosion Treatment </label>&nbsp;&nbsp;\n            <label class="radio-inline">\n              <input type="radio" name="corrosion_rx" value="Yes">Yes\n            </label>\n            <label class="radio-inline">\n              <input type="radio" name="corrosion_rx" value="No">No\n            </label>\n            <label class="radio-inline active">\n              <input type="radio" name="corrosion_rx" value="Unkown" checked="">Unknown\n            </label>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-2 form-group">\n          <label for="nitrate">Nitrate</label>\n          <input type="number" size="10" class="form-control input-sm" min="0" step="1" name="nitrate" placeholder="Nitrate (nM)" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="sulfate">Sulfate</label>\n          <input type="number" class="form-control input-sm" min="0" step="1" name="sulphate" placeholder="Sulfate (nM)" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="phosphate">Phosphate</label>\n          <input type="number" class="form-control input-sm" min="0" step="1" name="phosphate" placeholder="Phosphate (nM)" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="temp">Temperature</label>\n          <input type="number" class="form-control input-sm" min="0" step="1" name="temp" placeholder="Temperature (C)" >\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-12 form-group">\n            <label for="biomass">In Situ Biomass </label>&nbsp;&nbsp;\n            <label class="radio-inline">\n              <input type="radio" name="biomass" value="High">High\n            </label>\n            <label class="radio-inline">\n              <input type="radio" name="biomass" value="Moderate">Moderate\n            </label>\n            <label class="radio-inline">\n              <input type="radio" name="biomass" value="Low">Low\n            </label>\n            <label class="radio-inline active">\n              <input type="radio" name="biomass" value="Unkown" checked="">Unknown\n            </label>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-2 form-group">\n          <label for="oil_water">Oil:Water</label>\n          <input type="number"  class="form-control input-sm" min="0" step="1" name="oil_water" placeholder="Oil:Water (Ratio)" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="acetate">Acetate</label>\n          <input type="number"  class="form-control input-sm" min="0" step="1" name="acetate" placeholder="Acetate (nM)" >\n        </div>\n        <div class="col-sm-2 form-group">\n          <label for="propionate">Propionate</label>\n          <input type="number" size="10" class="form-control input-sm" min="0" step="1" name="propionate" placeholder="Propionate (nM)" >\n        </div>\n    </div>\n    <div class="row">\n      <div class="col-sm-4 form-group" style="padding-top:5px;">\n        <label for="fgs">Functional Gene Search</label>\n\n        <input id="visual_fgs" type="text" class="form-control input-sm col-sm-2"  value="" style="float:right " readonly/>\n      </div>\n      <div class="col-sm-3 form-group float-btn">\n        <button id="fgs_btn" type="button" class="btn btn-default">Gene Database</button>\n      </div>\n    </div>\n    <div role="tabpanel" class="tabbable" style="clear:both;" >\n     <ul id=\'myTa\' class="nav nav-tabs  " role="tablist">\n        <li role="presentation" class="active"><a href="#url" aria-controls="url" role="tab" data-toggle="tab">Data Url</a></li>\n        <li role="presentation"><a href="#upload" aria-controls="upload" role="tab" data-toggle="tab">Upload Data</a></li>\n      </ul>\n      <div id="myTabContent1" class="tab-content" style="margin-bottom:0px">\n        <div role="tabpanel" class="tab-pane fade in active" id="url">\n            <div class="row">\n                <div class="form-group required col-sm-9">\n                    <label class="control-label" for="args">Forward Read URL</label>\n                    <input id="foward_url" type="text" class="form-control input-sm" name="args" placeholder="Forward Read URL" >\n                </div>\n            </div>\n            <div class="row">\n               <div class="form-group required col-sm-9">\n                    <label class="control-label" for="args">Reverse Read URL</label>\n                    <input id="reverse_url" type="text" class="form-control input-sm" name="args" placeholder="Reverse Read URL" >\n                </div>\n            </div>\n            <button type="submit" id="form_submit" class="btn btn-default pull-right">Submit Sample</button>\n           </form>\n        </div>\n        <div role="tabpanel" class="tab-pane fade" id="upload">\n            <form class="col-sm-12 form1" id="task_form_file" onsubmit="return task_submit_file();">\n                <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+i((o=null!=(o=e.csrftoken||(null!=a?a.csrftoken:a))?o:t,typeof o===r?o.call(a,{name:"csrftoken",hash:{},data:s}):o))+'"/>\n                </div>\n                <div class="row">\n                    <div class="form-group required col-sm-9">\n                        <label class="control-label" for="args">Forward Read File</label>\n                        <input type="file" class="form-control file-form-control input-sm" name="forward_file" placeholder="Forward Read File" >\n                    </div>\n                </div>\n                <div class="row">\n                   <div class="form-group required col-sm-9">\n                        <label class="control-label" for="args">Reverse Read File</label>\n                        <input type="file" class="form-control file-form-control input-sm" name="reverse_file" placeholder="Reverse Read File" >\n                    </div>\n                </div>\n                <button type="submit" id="form_submit" class="btn btn-default pull-right">Submit Sample</button>\n             </form>\n          </div>\n     </div>\n  </div>\n </div> <!--End of metgenomic-->\n <div id="hide_amplicon">\n    <form class="col-sm-12 form1" id="amplicon_form1" onsubmit="return false;">\n      <div class="row">\n        <div class="col-sm-4 form-group required">\n          <label class="control-label" for="sample_name">Sample Name</label>\n          <input id="sample_name" type="text" class="form-control input-sm" name="sample_name" placeholder="Name" >\n        </div>\n     </div>\n    <div role="tabpanel" class="tabbable" style="clear:both;" >\n     <ul id=\'myTa\' class="nav nav-tabs  " role="tablist">\n        <li role="presentation" class="active"><a href="#url1" aria-controls="url" role="tab" data-toggle="tab">Data Url</a></li>\n        <li role="presentation"><a href="#upload1" aria-controls="upload" role="tab" data-toggle="tab">Upload Data</a></li>\n      </ul>\n      <div id="myTabContent2" class="tab-content" style="margin-bottom:0px">\n        <div role="tabpanel" class="tab-pane fade in active" id="url1">\n          <div class="row">\n              <div class="form-group required col-sm-9">\n                  <label class="control-label" for="args">Map File URL</label>\n              </div>\n          </div>\n          <div class="row">\n            <div class="controls form-inline col-sm-9">\n                  <input id="map_url" type="text" class="form-control input-sm" name="args" placeholder="Map File URL" >\n                  <button id="check_map_url" class="btn btn-default inline">Check Map File</button>\n              </div>\n          </div>\n            <div class="row">\n                <div class="form-group required col-sm-9">\n                    <label class="control-label" for="args">Forward Read URL</label>\n                    <input id="foward_url" type="text" class="form-control input-sm" name="args" placeholder="Forward Read URL" >\n                </div>\n            </div>\n            <div class="row">\n               <div class="form-group required col-sm-9">\n                    <label class="control-label" for="args">Reverse Read URL</label>\n                    <input id="reverse_url" type="text" class="form-control input-sm" name="args" placeholder="Reverse Read URL" >\n                </div>\n            </div>\n            <button type="submit" id="form_submit" class="btn btn-default pull-right">Submit Sample</button>\n           </form>\n        </div>\n        <div role="tabpanel" class="tab-pane fade" id="upload1">\n            <form class="col-sm-12 form1" id="task_form_file" onsubmit="return false;">\n                <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+i((o=null!=(o=e.csrftoken||(null!=a?a.csrftoken:a))?o:t,typeof o===r?o.call(a,{name:"csrftoken",hash:{},data:s}):o))+'"/>\n                </div>\n                <div class="row">\n                    <div class="form-group required col-sm-9">\n                        <label class="control-label" for="args">Map File</label>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="controls form-inline col-sm-9">\n                        <input id="map_file" type="file" class="form-control file-form-control input-sm" name="map_file" placeholder="Map File" >\n                        <button id="check_map_file" class="btn btn-default">Check Map File</button>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="form-group required col-sm-9">\n                        <label class="control-label" for="args">Forward Read File</label>\n                        <input type="file" class="form-control file-form-control input-sm" name="forward_file" placeholder="Forward Read File" >\n                    </div>\n                </div>\n                <div class="row">\n                   <div class="form-group required col-sm-9">\n                        <label class="control-label" for="args">Reverse Read File</label>\n                        <input type="file" class="form-control file-form-control input-sm" name="reverse_file" placeholder="Reverse Read File" >\n                    </div>\n                </div>\n                <button type="submit" id="form_submit" class="btn btn-default pull-right">Submit Sample</button>\n            </form>\n        </div>\n      </div>\n    </div>\n </div> <!--End of amplicon-->\n</div>\n<div id="output">\n  <h3>Sample Submitted</h3>\n  <button id="newSample" type="button" class="btn btn-default" style="float:right;margin-right:20px;" disabled>Submit Another Sample</button>\n  <div id="file-up" class="col-md-9">\n    <h4>File Upload</h4>\n    <div class="progress">\n      <div class="bar"></div>\n      <div class="percent">0%</div>\n    </div>\n  </div><div id="results" class="col-md-9" style="clear:both;"><div id="task_result"></div></div></div>\n'},useData:!0}),a["tmpl-tr"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,e,n,s){var o,t=e.helperMissing,r="function",i=l.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+i((o=null!=(o=e.result||(null!=a?a.result:a))?o:t,typeof o===r?o.call(a,{name:"result",hash:{},data:s}):o))+"');return false;\" >"+i((o=null!=(o=e.task_name||(null!=a?a.task_name:a))?o:t,typeof o===r?o.call(a,{name:"task_name",hash:{},data:s}):o))+"</a></td><td>"+i((o=null!=(o=e.timestamp||(null!=a?a.timestamp:a))?o:t,typeof o===r?o.call(a,{name:"timestamp",hash:{},data:s}):o))+"</td><td>"+i((e.json_metatags||a&&a.json_metatags||t).call(a,null!=a?a.tags:a,{name:"json_metatags",hash:{},data:s}))+"</td></tr>\n"},useData:!0}),a["tmpl-user"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,e,n,s){var o,t=e.helperMissing,r="function",i=l.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+i((o=null!=(o=e.gravator_url||(null!=a?a.gravator_url:a))?o:t,typeof o===r?o.call(a,{name:"gravator_url",hash:{},data:s}):o))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+i((o=null!=(o=e.username||(null!=a?a.username:a))?o:t,typeof o===r?o.call(a,{name:"username",hash:{},data:s}):o))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+i((o=null!=(o=e.name||(null!=a?a.name:a))?o:t,typeof o===r?o.call(a,{name:"name",hash:{},data:s}):o))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+i((o=null!=(o=e.email||(null!=a?a.email:a))?o:t,typeof o===r?o.call(a,{name:"email",hash:{},data:s}):o))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+i((o=null!=(o=e.csrftoken||(null!=a?a.csrftoken:a))?o:t,typeof o===r?o.call(a,{name:"csrftoken",hash:{},data:s}):o))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+i((o=null!=(o=e.first_name||(null!=a?a.first_name:a))?o:t,typeof o===r?o.call(a,{name:"first_name",hash:{},data:s}):o))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+i((o=null!=(o=e.last_name||(null!=a?a.last_name:a))?o:t,typeof o===r?o.call(a,{name:"last_name",hash:{},data:s}):o))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+i((o=null!=(o=e.email||(null!=a?a.email:a))?o:t,typeof o===r?o.call(a,{name:"email",hash:{},data:s}):o))+'">\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+i((o=null!=(o=e.csrftoken||(null!=a?a.csrftoken:a))?o:t,typeof o===r?o.call(a,{name:"csrftoken",hash:{},data:s}):o))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0})}();
